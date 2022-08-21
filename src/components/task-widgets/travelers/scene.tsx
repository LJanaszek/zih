import { useReducer } from "react";
import { useRef, useState, useCallback } from "react";
import styled from "styled-components";
import VideoComponent from "./scene/video";

import ChangeCamera from '../../../assets/icons/camera/change.svg';
import CameraOn from '../../../assets/icons/camera/on.svg';
import CameraOff from '../../../assets/icons/camera/off.svg';

import createScene, { SceneAPI } from "./scene/scene";
import { useMemo } from "react";
import { useEffect } from "react";
import ScrollToTop from "../../../utils/widgets/scroll-to-top";
import useCamera from "../../../modules/camera/use-camera";
import Popup from "../../elements/popup";

type Props = {
    onComplete(points: number): void
}

const Container = styled.div`
    width: 100%;
    height: 100vh;

    margin: 0 auto;

    position: relative;

    display: grid;



    .camera-container {
        background: black;
        position: relative;

        .start-button-overlay {
            background: rgba(0,0,0,.5);

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .scene-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            /* border: 1px solid red; */
        }
    }

    .toggle-camera {

        display: flex;
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
            width: 30%;
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

    .logo {

        display: flex;
        justify-content: center;
        align-items: center;

        img {
            display: block;
            width: 30%;
        }
    }

    .timer {
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Roboto Slab';
        font-size: 1.5em;
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
            grid-row: 2 / span 2;
        }

        .change-camera {
            grid-column: 1;
            grid-row: 4 / span 2;
        }

        .make-photo {
            grid-column: 3;
            grid-row: 3 / span 2;
        }

        .logo {
            grid-column: 3;
            grid-row: 5 / span 2;
        }

        .timer {
            grid-column: 3;
            grid-row: 1 / span 2;
        }
    }

    @media (orientation: portrait) {

        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr 1fr 6fr;

        .camera-container {
            grid-column: 1 / span 3;
            grid-row: 3;
        }

        .toggle-camera {
            grid-column: 1;
            grid-row: 1;
        }

        .change-camera {
            grid-column: 3;
            grid-row: 1;
        }

        .make-photo {
            grid-column: 2;
            grid-row: 3;
        }

        .logo {
            grid-column: 2;
            grid-row: 1;
        }

        .timer {
            grid-column: 2;
            grid-row: 2;
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

export default function Zad5Scene({ onComplete }: Props) {
    const cameraConfig = useMemo(() => {
        return { facingMode: 'environment' }
    }, []);

    const { videoInputDevices, error, srcObject, nextDevice } = useCamera(cameraConfig);
    const [permitionDenied, setPermitionDenied] = useState(false);
    const [showPermitionError, setShowPermitionDenied] = useState(false);

    const [showStartButton, setShowStartButton] = useState(true);
    const [gameRunning, setGameRunning] = useState(false);

    const showPermitionInfo = useCallback(() => {
        setPermitionDenied(true);
    }, [setPermitionDenied]);

    const sceneContainerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<SceneAPI | null>(null)

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

    const startScene = useCallback(() => {
        if (sceneContainerRef.current) {
            sceneRef.current = createScene(sceneContainerRef.current);
            setShowStartButton(false);
            setGameRunning(true);
        }
    }, [setShowStartButton, setGameRunning]);

    const onStartClicked = useCallback(() => {

        //@ts-ignore
        if (DeviceOrientationEvent.requestPermission) {
            //@ts-ignore
            DeviceOrientationEvent.requestPermission()
                .then((response: any) => {
                    if (response === 'granted') {
                        startScene();
                    }
                })
                .catch(console.error)
        } else {
            startScene();
        }

    }, [startScene]);

    const onPermitionDenied = useCallback(() => {
        toggleVideo(false)
        setPermitionDenied(true);
        setShowPermitionDenied(true);
    }, [setPermitionDenied, setShowPermitionDenied, toggleVideo]);

    useEffect(() => {
        if (error?.name === 'NotAllowedError') {
            onPermitionDenied();
        }
    }, [onPermitionDenied, error]);

    const [timeToEnd, changeTime] = useReducer((state: number, action: number) => {
        return state + action;
    }, 30000)

    useEffect(() => {
        if (gameRunning) {
            const id = setInterval(() => {
                changeTime(-400);
            }, 400);

            return () => {
                clearTimeout(id);
            }
        }
    }, [changeTime, gameRunning]);

    useEffect(() => {
        if (sceneRef.current && timeToEnd <= 0) {
            const points = sceneRef.current.getPoints();
            onComplete(points);
        }
    }, [timeToEnd, onComplete]);

    const formatedTimeToEnd = useMemo(() => {
        const time = (timeToEnd / 1000) | 0;

        if (time < 10) {
            return `00:0${time}`
        } else {
            return `00:${time}`;
        }
    }, [timeToEnd]);

    return <Container>
        <ScrollToTop behavior="smooth" />
        <div className="camera-container">
            {showVideo && <VideoComponent srcObject={srcObject as MediaStream} />}
            <div ref={sceneContainerRef} className="scene-container"></div>
            {showStartButton && <div className="start-button-overlay">
                <button className="button" onClick={onStartClicked}>START</button>
            </div>}
        </div>

        {showVideo && (videoInputDevices.length > 1) &&
            <div className="change-camera">
                <input type="image" src={ChangeCamera} onClick={nextDevice} alt="" />
            </div>
        }

        <div className="toggle-camera">
            <input type="image" src={showVideo ? CameraOff : CameraOn} onClick={onToggleVideoClick} alt="" />
        </div>

        <div className="timer">
            {formatedTimeToEnd}
        </div>

        {showPermitionError && <Popup onClick={() => setPermitionDenied(false)}>
            <p>
                Nie wyraziłeś zgody na udostępnienie kamery. Aby zmienić ustawienia, wejdź w ustawienia przeglądarki, następnie w ustawienia witryny i wyraź zgodę na udostępnienie aparatu. Na koniec odśwież stronę i zobacz grę w rozszerzonej rzeczywistości.
            </p>
        </Popup>}
    </Container>
}
