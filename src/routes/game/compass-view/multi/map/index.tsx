import { PropsWithChildren, useCallback, useEffect, useRef } from "react"
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

const widgetRatio = 1.35;

export default function MapComponent({ onPointerClicked, points, activePoint }: PropsWithChildren<Props>) {
    const widgetContainerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<App>();

    useEffect(() => {
        if (appRef.current) return;

        const app = new App({
            assetsPath: '/',
            onPointerClicked,
            points
        });

        appRef.current = app;


        if (widgetContainerRef.current) {
            app.resizeTo = widgetContainerRef.current;
            widgetContainerRef.current.appendChild(app.view);
        }


        return () => {
            appRef.current?.destroy(true);
            appRef.current = undefined;
        }
    }, []);

    useEffect(() => {
        console.log('new Points!', points, appRef.current);
        if (appRef.current) {
            appRef.current.setPoints(points.active, points.inactive);
        }
    }, [points]);

    useEffect(() => {
        console.log('new activePoint!', points, appRef.current);
        if (appRef.current) {
            appRef.current.setActivePoint(activePoint || null);
        }
    }, [activePoint]);

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
