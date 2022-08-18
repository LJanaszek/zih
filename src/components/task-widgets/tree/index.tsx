import { useCallback, useEffect, useRef } from "react"
import styled from "styled-components";
import App from "./pixi-app/app";
import WebFonts from 'webfontloader';

type Props = {
    onComplete(): void
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const widgetRatio = 1.52;

const TreeTask: React.FC<Props> = ({ onComplete }) => {
    const widgetContainerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<App>();

    const onResize = useCallback(() => {
        if (widgetContainerRef.current && containerRef.current && appRef.current && appRef.current?.view) {
            const boundries = containerRef.current.getBoundingClientRect();

            appRef.current.view.style.height = `${boundries.height}px`;
            appRef.current.view.style.width = `${boundries.height / widgetRatio}px`;
        }
    }, []);

    useEffect(() => {

        WebFonts.load({
            custom: {
                families: ['Gothic']
            },
            fontactive: () => {
                if (appRef.current) return;

                const app = new App({
                    assetsPath: '/task-3/',
                    onComplete
                });
                appRef.current = app;


                if (widgetContainerRef.current) {
                    widgetContainerRef.current.appendChild(app.view);
                }

                onResize();
            }
        });


        return () => {
            appRef.current?.destroy(true);
            appRef.current = undefined;
        }
    }, [onComplete, onResize]);

    useEffect(() => {
        window.addEventListener('resize', onResize);

        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [onResize]);

    return <Container ref={containerRef}>
        <div ref={widgetContainerRef} style={{
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row'
        }}></div>

    </Container>
}

export default TreeTask;
