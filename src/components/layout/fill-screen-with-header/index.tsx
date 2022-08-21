import { PropsWithChildren } from "react";
import styled from "styled-components";
import PageHeader from "../header";

const Container = styled.div`
    height: 100vh;
    display: flex;

    align-items: stretch;
    flex-direction: column;

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

export default function FillScreenWithHeader({ children }: PropsWithChildren<{}>) {
    return <Container>
        <div className="header">
            <PageHeader />
        </div>
        <div className="content">
            {children}
        </div>
    </Container>
}
