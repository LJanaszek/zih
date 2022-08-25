import React, { useImperativeHandle } from "react";
import { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

import Sticker from './street.png';
import ScrollToTop from "../../../utils/widgets/scroll-to-top";

type Props = {
    srcObject: MediaStream,
    stickerAlpha: number
}

type API = {
    getVideo(): HTMLVideoElement | null,
    getOrientation(): 'vertical' | 'horizontal'
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    .sticker-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sticker-wrapper {
        position: relative;
        /* box-shadow: inset 0 0 3px 3px white; */
    }

    .sticker {
        width: 100%;
        height: 100%;

        position: absolute;
        bottom: 0;
        right: 0;

        background: url(${Sticker}) 100% 0 no-repeat;
        background-size: cover;
    }
`;

const VideoComponent = React.forwardRef<API, Props>(({ srcObject, stickerAlpha }, ref) => {
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
        <ScrollToTop behavior="smooth" />
        <video ref={videoRef} autoPlay={true} playsInline></video>
        <div className="sticker-overlay" ref={sticketOverlayRef} style={{
            opacity: stickerAlpha/100
        }}>
            <div className="sticker-wrapper" ref={sticketWrapperRef}>
                <div className="sticker"></div>
            </div>
        </div>
    </Container>
}
)


export default VideoComponent;
