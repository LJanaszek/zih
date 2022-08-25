import { useReducer, useRef, useCallback } from "react";
import styled from "styled-components";
import VideoComponent from "./video";

import Sticker from './street.png';

import ChangeCamera from '../../../assets/icons/camera/change.svg';
import CameraOn from '../../../assets/icons/camera/on.svg';
import CameraOff from '../../../assets/icons/camera/off.svg';
import makePhotoIcon from '../../../assets/icons/camera/make-photo.svg';
import alphaIcon from '../../../assets/icons/camera/alpha.svg';

import { useState } from "react";
import { useEffect } from "react";
import ScrollToTop from "../../../utils/widgets/scroll-to-top";
import useCamera from "../../../modules/camera/use-camera";
import Popup from "../../elements/popup";
import SmallPageHeader from "../../layout/header/small-header";

type Props = {
    onComplete(): void
}

const Container = styled.div`
    width: 100%;
    height: 100vh;

    margin: 0 auto;

    position: relative;

    display: grid;

    .camera-container {
        background: black;
    }

    .toggle-camera {

        display: flex;
        justify-content: center;
        align-items: center;

        input {
            width: 30%;
        }
    }

    .alpha {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input {
            width: 30%;
        }
    }

    .change-camera {

        display: flex;
        justify-content: center;
        align-items: center;

        input {
            width: 40%;
        }
    }

    .make-photo {

        display: flex;
        justify-content: center;
        align-items: center;

        input {
            width: 50%;
        }
    }

    @media (orientation: landscape) {

        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: repeat(6, 1fr);

        .camera-container {
            grid-column: 2;
            grid-row: 1 / span 6;
        }

        .toggle-camera {
            grid-column: 1;
            grid-row: 4 / span 2;
        }

        .change-camera {
            grid-column: 1;
            grid-row: 2 / span 2;
        }

        .make-photo {
            grid-column: 3;
            grid-row: 3 / span 2;
        }

        .logo {
            grid-column: 1;
            grid-row: 1;
            padding-top: .3em;

            h1 {
                font-size: .3rem;
                vertical-align: top;
            }
        }

        .alpha {
            grid-column: 3;
            grid-row: 1 / span 2;

            padding-top: .3em;
            justify-content: flex-start;
        }
    }

    @media (orientation: portrait) {

        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto  1fr 4fr 1fr;

        .camera-container {
            grid-column: 1 / span 3;
            grid-row: 3;
        }

        .toggle-camera {
            grid-column: 1;
            grid-row: 2;
        }

        .change-camera {
            grid-column: 3;
            grid-row: 2
        }

        .make-photo {
            grid-column: 2;
            grid-row: 4;
        }

        .logo {
            grid-column: 1 / span 3;
            grid-row: 1;
        }

        .alpha {
            grid-column: 1;
            grid-row: 4;
        }
    }

    video {
        width: 100%;
        height: 100%;
    }

    .background-controlls {
        position: absolute;
        top: 0;
        right: 0;

        padding: 20px;
    }

    canvas {
        display: none;
    }

    .camera-container {

    }

`;

export default function Zad1Photo({ onComplete }: Props) {
    const { videoInputDevices, error, srcObject, nextDevice } = useCamera();
    const [permitionDenied, setPermitionDenied] = useState(false);
    const [showPermitionError, setShowPermitionDenied] = useState(false);

    const showPermitionInfo = useCallback(() => {
        setPermitionDenied(true);
    }, [setPermitionDenied]);

    const [showVideo, toggleVideo] = useReducer((state: boolean, action: boolean | null) => {
        return action === null ? !state : action;
    }, true);

    const onToggleVideoClick = useCallback(() => {
        if (permitionDenied) {
            showPermitionInfo()
        } else {
            toggleVideo(null)
        }
    }, [toggleVideo, showPermitionInfo, permitionDenied]);

    const captureRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<any>(null);

    const [alpha, changeAlpha] = useReducer((state) => {
        return state+25 > 100 ? 0 : state+25;
    }, [100]);

    const makeSnapshot = useCallback(() => {
        if (videoRef.current && captureRef.current) {
            const capture = captureRef.current;
            var ctx = capture.getContext('2d');

            const v = document.getElementsByTagName('video')[0];

            if (v) {
                capture.width = v.videoWidth;
                capture.height = v.videoHeight;
            }

            var img = new Image();

            img.src = Sticker;

            img.onload = () => {
                if (ctx) {

                    const stickerSpaceWidth = capture.width;

                    const captuteRatio = capture.width / capture.height;

                    const imgWidth = 896;
                    const imgHeight = 577;

                    const imgRatio = imgWidth / imgHeight;

                    let stickerWidth = imgWidth;
                    let stickerHeight = imgHeight;

                    if (imgRatio >= captuteRatio) {
                        stickerWidth = Math.min(imgWidth, stickerSpaceWidth);
                        stickerHeight = stickerWidth / imgRatio;
                    } else {
                        console.log('POZIOMO?')
                        stickerWidth = capture.width;
                        stickerHeight = stickerWidth / imgRatio;
                    }

                    ctx.drawImage(videoRef.current.getVideo(), 0, 0, capture.width, capture.height);
                    ctx.drawImage(img,
                        0,
                        (capture.height - stickerHeight) / 2,
                        stickerWidth,
                        stickerHeight);

                    var a = document.createElement('a');
                    a.href = capture.toDataURL("image/png");;
                    a.style.display = 'none';
                    a.setAttribute('download', 'ulica.png');
                    document.body.appendChild(a);
                    a.click();

                    onComplete();
                }
            }
        }
    }, [onComplete]);

    const onPermitionDenied = useCallback(() => {
        toggleVideo(false)
        setPermitionDenied(true);
        setShowPermitionDenied(true);
    }, [setPermitionDenied, setShowPermitionDenied, toggleVideo])

    useEffect(() => {
        if (error?.name === 'NotAllowedError') {
            onPermitionDenied();
        }
    }, [onPermitionDenied, error])

    return <>
        <ScrollToTop behavior="smooth" />
        <Container>
            <div className="logo">
                <SmallPageHeader />
            </div>
            <div className="camera-container">
                {showVideo && <VideoComponent ref={videoRef} srcObject={srcObject as MediaStream} stickerAlpha={alpha} />}
            </div>


            {showVideo && (videoInputDevices.length > 1) &&
                <div className="change-camera">
                    <input type="image" src={ChangeCamera} onClick={nextDevice} alt="" />
                </div>
            }

            <div className="toggle-camera">
                <input type="image" src={showVideo ? CameraOff : CameraOn} onClick={onToggleVideoClick} alt="" />
            </div>

            <div className="make-photo">
                <input type="image" alt="zrób zdjęcie" src={makePhotoIcon} onClick={makeSnapshot} />
            </div>

            <div className="alpha">
                <input type="image" src={alphaIcon} onClick={changeAlpha} alt="" />
                <span>
                    {alpha}%
                </span>
            </div>


            {showPermitionError && <Popup onClick={() => setPermitionDenied(false)}>
                <p>
                    Nie wyraziłeś zgody na udostępnienie kamery. Aby zmienić ustawienia, wejdź w ustawienia przeglądarki, następnie w ustawienia witryny i wyraź zgodę na udostępnienie aparatu. Na koniec odśwież stronę i zobacz grę w rozszerzonej rzeczywistości.
                </p>
            </Popup>}
            <canvas ref={captureRef} ></canvas>
        </Container>
    </>
}
