import { useEffect, useRef } from "react"
import styled from "styled-components";
import App from "./pixi-app/app";
import WebFonts from 'webfontloader';

type Props = {
    onComplete(): void
    onGameStateChanged(data: BirdTaskState): void
}

export type BirdTaskState = {
    birdCount: number,
    findedBirdCount: number,
    isComplete: boolean
}

const Container = styled.div`
    // position: absolute;
    // top: 0;
    // left: 0;
    // right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    canvas {
        height: 100%;
        width: 100vh;
        /* outline: 1px red solid; */
        object-fit: contain;

        @media (orientation: landscape) {
            max-width: 100%;
            height: auto;
            max-height: 100%;
        }

        @media (orientation: portrait) {
            max-width: 100%;
            height: auto;
            max-height: 100%;
        }


    }
`;

const BirdsTask: React.FC<Props> = ({ onComplete, onGameStateChanged }) => {
    const widgetContainerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<App>();

    useEffect(() => {

        WebFonts.load({
            custom: {
                families: ['Gothic']
            },
            fontactive: () => {
                if (appRef.current) return;

                const app = new App({
                    assetsPath: '/task-2/',
                    onComplete,
                    onGameStateChanged
                });
                appRef.current = app;


                if (widgetContainerRef.current) {
                    widgetContainerRef.current.appendChild(app.view);
                }
            }
        });


        return () => {
            appRef.current?.destroy(true);
            appRef.current = undefined;
        }
    }, [onComplete, onGameStateChanged]);

    return <Container ref={widgetContainerRef}></Container>
}

export default BirdsTask;
