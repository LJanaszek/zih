import { useCallback, useEffect, useRef } from "react"
import styled from "styled-components";
import App from "./pixi-app/app";
import WebFonts from 'webfontloader';

type Props = {}

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

const MapComponent: React.FC<Props> = () => {
    const widgetContainerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<App>();

    const onResize = useCallback(() => {
        // if (widgetContainerRef.current && containerRef.current && appRef.current && appRef.current?.view) {
        //     const boundries = containerRef.current.getBoundingClientRect();

        //     const ratio = boundries.width / boundries.height;

        //     console.log(ratio);

        //     if (ratio >= widgetRatio) {
        //         appRef.current.view.style.height = `${boundries.height}px`;
        //         appRef.current.view.style.width = `${boundries.height * widgetRatio}px`;
        //     } else {
        //         appRef.current.view.style.height = `${boundries.width / widgetRatio}px`;
        //         appRef.current.view.style.width = `${boundries.width}px`;
        //     }


        //     appRef.current.view.addEventListener('mousedown', (e) => {
        //         e.preventDefault();
        //     });
        // }
    }, []);

    useEffect(() => {
        if (appRef.current) return;

        const app = new App({
            assetsPath: '/',
        });

        appRef.current = app;


        if (widgetContainerRef.current) {
            app.resizeTo = widgetContainerRef.current;
            widgetContainerRef.current.appendChild(app.view);
        }

        onResize();


        return () => {
            appRef.current?.destroy(true);
            appRef.current = undefined;
        }
    }, [onResize]);

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

export default MapComponent;
