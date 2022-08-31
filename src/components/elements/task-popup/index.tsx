import styled from "styled-components";
import agree from "./img/agree.svg";
import help from "../../../routes/game/task/img/pomoc.svg";
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
        text-align: center;
        max-width: 1200px;
        width: 95vw;
        background: white;
        border: 1px solid var(--color3);

        display: flex;
        flex-direction: column;
        align-items: center;
        max-height: 90vh;
        overflow: auto;
    }

    .content {
        padding: 1rem 2rem;

        img {
            width: 90%;
        }
    }

    input[type=image] {
        min-height: 10vh;
        max-height: 20vh;
        height:4em;
    }

    header{
        width:100%;
        min-height: 10vh;
        max-height: 20vh;
        height:4em;
        background: url(${help}) 50% 50% no-repeat var(--color3);
        background-size: auto 80%;
        text-align:center;
        display:flex;
    }
`;
export default function TaskPopup({ children, onClick }: Props) {
    return <Container aria-modal="true">
        <div className="inner">
            <header>
            </header>
            <div className="content">
                {children}
            </div>
            <div>
                <input type="image" alt="ok" src={agree} onClick={onClick} />
            </div>
        </div>
    </Container>
}
