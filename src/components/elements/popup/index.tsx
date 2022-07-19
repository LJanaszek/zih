import styled from "styled-components";

type Props = React.PropsWithChildren<{
    onClick(): void
}>;

const Container = styled.div`
    background: rgba(0,0,0,.8);

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .inner {
        max-width: 1200px;
        padding: 1rem 4rem;
        background: white;
        border: 1px solid var(--color3);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        margin-top: 1em;
    }
`;
export default function Popup({ children, onClick }: Props) {
    return <Container aria-modal="true">

        <div className="inner">
            {children}
            <button className="button" onClick={onClick}>OK</button>
        </div>
    </Container>
}
