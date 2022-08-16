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

    const [phase, setPhase] = useState('in-proggress');

    useEffect(() => {
        const app = new App({
            assetsPath: '/generated/t-101/'
        });
        appRef.current = app;

        app.stage.on('complete', (points: number[]) => {
            setPhase('complete')
        });

        if (containerRef.current) {
            containerRef.current.appendChild(app.view);
            app.view.style.width = '100%';
        }

        return () => {
            app.destroy(true);
        }
    }, [onComplete, setPhase]);

    return <Container>
        <div ref={containerRef} style={{
            width: '100%',
            margin: '0 auto'
        }}></div>
    </Container>
}

export default TreeTask;
