import styled from "styled-components";
import next from "../../../assets/icons/okpom.svg"
import rozaIcon from '../../../assets/roza.svg';


type Props = React.PropsWithChildren<{
    onClick(): void
}>;

const Container = styled.div`
    background: rgba(0,0,0,.8);
    color: var(--color1);

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
        background: white;
        border: 1px solid var(--color3);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        padding: 1rem 4rem;
    }

    input[type=image] {
        height: 6em;
    }

    header{
        width:100%;
        height:4em;
        background: url(${rozaIcon}) 50% 50% no-repeat var(--color1);
        background-size: auto 80%;
        text-align:center;
        display:flex;
    }
`;
export default function HomePagePopup({ children, onClick }: Props) {
    return <Container aria-modal="true">
        <div className="inner">
            <header>
            </header>
            <div className="content">
                {children}
                <div>
                    <input type="image" alt="ok" src={next} onClick={onClick} />
                </div>
            </div>
        </div>
    </Container>
}
