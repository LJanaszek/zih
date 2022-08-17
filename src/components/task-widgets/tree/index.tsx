import { useEffect, useRef, useState } from "react"
import styled from "styled-components";
import App from "./pixi-app/app";

type Props = {
    onComplete(): void
}

const Container = styled.div`

`;

const TreeTask: React.FC<Props> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const appRef = useRef<App>();

    useEffect(() => {
        const app = new App({
            assetsPath: '/task-3/',
            onComplete
        });
        appRef.current = app;


        if (containerRef.current) {
            containerRef.current.appendChild(app.view);
            app.resizeTo = containerRef.current;
        }

        return () => {
            app.destroy(true);
        }
    }, [onComplete]);

    return <Container>
        <div ref={containerRef} style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: '0 auto'
        }}></div>
    </Container>
}

export default TreeTask;
