import { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components";
import App from "./pixi-app/app";

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

    useEffect(() => {
        const app = new App({
            assetsPath: '/task-3/',
            onComplete
        });
        appRef.current = app;


        if (widgetContainerRef.current) {
            widgetContainerRef.current.appendChild(app.view);
        }

        return () => {
            app.destroy(true);
        }
    }, [onComplete]);

    const onResize = useCallback(() => {
        if (widgetContainerRef.current && containerRef.current && appRef.current) {
            const boundries = containerRef.current.getBoundingClientRect();

            appRef.current.view.style.height = `${boundries.height}px`;
            appRef.current.view.style.width = `${boundries.height / widgetRatio}px`;
        }
    }, []);

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
