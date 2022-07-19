import { useCallback, useEffect, useMemo, useState } from "react";

export default function useCamera(config?: {facingMode?: string}) {

    const [error, setError] = useState<DOMException | null>(null);
    const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
    const [srcObject, setSrc] = useState<MediaStream>();
    const [userSelectedDeviceIndex, setUserSelectedDeviceIndex] = useState<number | null>(null);

    const initMediaDevices = useCallback(async (constraints: MediaStreamConstraints) => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            return Promise.resolve();
        }

        // try {
            const srcObject = await navigator.mediaDevices.getUserMedia(constraints);
            setSrc(srcObject);
            navigator.mediaDevices.enumerateDevices()
                .then((deviceInfos) => {
                    setDevices(deviceInfos);
                })
                .catch((e: any) => {
                        console.error(e);
                })
        // } catch(e) {
        //     console.error(e);
        // }
    }, [setDevices])

    useEffect(() => {
        initMediaDevices({
            video: {
                facingMode: {
                    exact: config?.facingMode || 'user'
                }
            }
        }).catch((e: DOMException) => {
            if (e.name === 'OverconstrainedError') {
                initMediaDevices({
                    video: {}
                }).catch((e: DOMException) => {
                    setError(e);
                })
            } else {
                console.error(e);
                setError(e);
            }
        })
    }, [initMediaDevices, config]);

    const videoInputDevices = useMemo(() => {
        return devices.filter(d => d.kind === 'videoinput')
    }, [devices])

    useEffect(() => {
        if (userSelectedDeviceIndex !== null) {

            const device = videoInputDevices[userSelectedDeviceIndex];

            if (device) {
                const constraints = {
                    video: {
                        deviceId: {
                            exact: device.deviceId
                        }
                    }
                }

                navigator.mediaDevices.getUserMedia(constraints)
                    .then(srcObject => {
                        setError(null);
                        setSrc(srcObject);
                    })
                    .catch((err: DOMException) => {
                        setError(err);
                        console.error(err);
                    })
            }

        }
    }, [userSelectedDeviceIndex, videoInputDevices, setError])



    return {
        videoInputDevices,
        srcObject,
        error,

        stop: useCallback(() => {
            srcObject?.getTracks().forEach(t => t.stop());
        }, [srcObject]),

        nextDevice: useCallback(() => {
            if (userSelectedDeviceIndex === null) {
                const deviceId = srcObject?.getVideoTracks()[0].getSettings().deviceId;
                const index = videoInputDevices.findIndex(d => d.deviceId === deviceId);

                srcObject?.getTracks().forEach(t => t.stop());

                setUserSelectedDeviceIndex((index + 1) % videoInputDevices.length)
            } else {
                setUserSelectedDeviceIndex((userSelectedDeviceIndex + 1) % videoInputDevices.length)
            }
        }, [setUserSelectedDeviceIndex, userSelectedDeviceIndex, videoInputDevices, srcObject])
    }
}
