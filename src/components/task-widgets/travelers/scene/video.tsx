import React, { useImperativeHandle } from "react";
import { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

type Props = {
    srcObject: MediaStream
}

type API = {
    getVideo(): HTMLVideoElement | null,
    getOrientation(): 'vertical' | 'horizontal'
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    video {
        width: 100%;
        height: 100%;
    }
`;

const VideoComponent = React.forwardRef<API, Props>(({ srcObject }, ref) => {
    // const VideoComponent = ({ srcObject }: Props) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const sticketOverlayRef = useRef<HTMLDivElement>(null);
    const sticketWrapperRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        getVideo: () => {
            return videoRef.current;
        },
        getOrientation: () => {

            if (videoRef.current && sticketOverlayRef.current) {
                const videoWidth = videoRef.current.videoWidth;
                const videoHeight = videoRef.current.videoHeight;

                if (videoWidth > videoHeight) {
                    return 'vertical'
                } else {
                    return 'horizontal'
                }
            }

            return 'vertical';
        }
    }));

    const formatVideoTag = useCallback(() => {
        if (videoRef.current && sticketOverlayRef.current && sticketWrapperRef.current) {
            const videoWidth = videoRef.current.videoWidth;
            const videoHeight = videoRef.current.videoHeight;

            const tagWidth = sticketOverlayRef.current.offsetWidth;
            const tagHeight = sticketOverlayRef.current.offsetHeight;

            const videoRatio = videoWidth / videoHeight;
            const tagRatio = tagWidth / tagHeight;

            if (videoRatio > tagRatio) {
                sticketWrapperRef.current.style.width = `${tagWidth}px`;
                sticketWrapperRef.current.style.height = `${tagWidth / videoRatio}px`;
                sticketWrapperRef.current.classList.add('vertical');
                sticketWrapperRef.current.classList.remove('horizontal');
            } else {
                sticketWrapperRef.current.style.width = `${tagHeight * videoRatio}px`;
                sticketWrapperRef.current.style.height = `${tagHeight}px`;
                sticketWrapperRef.current.classList.add('horizontal');
                sticketWrapperRef.current.classList.remove('vertical');
            }

            setTimeout(() => {
                formatVideoTag();
            }, 500);
        }
    }, [videoRef]);

    useEffect(() => {

        const video = videoRef.current;

        if (video && srcObject) {
            video.srcObject = srcObject

            video.addEventListener('loadedmetadata', formatVideoTag);
        }

        window.addEventListener('resize', formatVideoTag);
        window.addEventListener('orientationchange', formatVideoTag);

        return () => {
            if (srcObject && video) {
                video.removeEventListener('loadedmetadata', formatVideoTag);
                video.srcObject = null;

                srcObject.getTracks()[0].stop()

                window.removeEventListener('resize', formatVideoTag);
                window.removeEventListener('orientationchange', formatVideoTag);
            }

        }
    }, [videoRef, srcObject, formatVideoTag])

    return <Container>
        <video ref={videoRef} autoPlay={true} playsInline></video>
        <div className="sticker-overlay" ref={sticketOverlayRef}>
        </div>
    </Container>
}
)


export default VideoComponent;
