import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import PageHeader from "../header";

const Container = styled.div`
    height: 100vh;
    display: flex;

    align-items: stretch;
    flex-direction: column;

    transition: .3s;

    .header {
        display: flex;
        justify-content: center;
    }

    .content {
        flex-grow: 1;
        flex-shrink: 1;
        position: relative;

        display: flex;
        flex-direction: column;

        justify-content: center;
    }
`;

export default function FillScreenWithHeader({ hideHeader, children }: PropsWithChildren<{hideHeader?: boolean}>) {
    const ref = useRef<HTMLDivElement>(null);

    const onResize = useCallback(() => {
        if (ref.current) {
            ref.current.style.height = window.innerHeight + 'px';
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', onResize);

        onResize();

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, [onResize]);

    return <Container ref={ref}>
        {!hideHeader && <div className="header">
            <PageHeader />
        </div>}
        <div className="content">
            {children}
        </div>
    </Container>
}
