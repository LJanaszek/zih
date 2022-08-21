import { PropsWithChildren, useEffect, useRef, useState } from "react"
import styled from "styled-components";
import App from "./pixi-app/app";

type Props = {
    onPointerClicked(id: string): void;
    points: {
        active: string[],
        inactive: string[]
    }
    activePoint?: string
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: stretch;
    align-items: stretch;
`;

export default function MapComponent({ onPointerClicked, points, activePoint }: PropsWithChildren<Props>) {
    const widgetContainerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<App>();

    const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        if (appRef.current) return;

        const app = new App({
            assetsPath: '/',
            onPointerClicked
        });

        appRef.current = app;

        app.stage.on('ready', () => {
            setAppReady(true);
        });

        app.renderer.view.style.objectFit = 'contain';
        app.renderer.view.style.maxWidth = '100%';

        if (widgetContainerRef.current) {
            widgetContainerRef.current.appendChild(app.view);
        }

        return () => {
            appRef.current?.destroy(true);
            appRef.current = undefined;
        }
    }, [onPointerClicked, setAppReady]);

    useEffect(() => {
        if (appRef.current && appReady) {
            appRef.current.setPoints(points.active, points.inactive);
        }
    }, [points, appReady]);

    useEffect(() => {
        if (appRef.current && appReady) {
            appRef.current.setActivePoint(activePoint || null);
        }
    }, [activePoint, appReady]);

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
