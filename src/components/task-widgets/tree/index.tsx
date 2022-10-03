import { useEffect, useRef } from "react"
import styled from "styled-components";
import App from "./pixi-app/app";
import WebFonts from 'webfontloader';

type Props = {
    onComplete(): void
    onHelp(): void
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    canvas {
        /* outline: 1px red solid; */
        object-fit: contain;

        @media (orientation: landscape) {
            max-width: 100%;
            height: auto;
            max-height: 100%;
        }

        @media (orientation: portrait) {
            max-width: 100%;
            max-height: 100%;
        }


    }
`;

const TreeTask: React.FC<Props> = ({ onComplete, onHelp }: Props) => {
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
                    assetsPath: '/task-3/',
                    onComplete,
                    onHelp
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
    }, [onComplete]);

    return <Container ref={widgetContainerRef}></Container>
}

export default TreeTask;
