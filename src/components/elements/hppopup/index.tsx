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

    .popinner {
        border: 2ps solid;
        max-width: 1200px;
        // padding: 1rem 4rem;
        background: white;
        border: 1px solid var(--color3);
        width:90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align:center;
        font-size:22px;
    }

    button {
        margin-top: 2em;
        background: none;
        border: none;
        margin-bottom:4em;
    }
    .icon{
        background: url(${next})50% 50% no-repeat;
        padding: 3em;
    }
    img{
        width:3em;
        position: absolute;
        padding: .5em;
    }

`;
export default function HomePagePopup({ children, onClick }: Props) {
    return <Container aria-modal="true">

        <div className="popinner">
        <img src={rozaIcon} alt="" />
            {children}
            <button onClick={onClick}><i className="icon"/></button>
        </div>
    </Container>
}
