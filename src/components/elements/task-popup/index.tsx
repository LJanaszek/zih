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
        padding: 1rem 4rem;
        background: white;
        border: 1px solid var(--color3);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button{
        background:white;
        width:auto;
        padding:0;
    }
    .agree {
        margin:0 auto;
        background: url(${agree})100% 100% no-repeat;
        padding:2em;
        display:block;
    }
    header{
        width:100%;
        height:4em;
        background:var(--color3);
        text-align:center;
        display:flex;
        img{
            margin: auto;
            width:12%;
        }
    }
`;
export default function Popup({ children, onClick }: Props) {
    return <Container aria-modal="true">
        <header>
            <img src={help} alt="" />
        </header>
        <div className="inner">
            
            {children}
            <button className="button" onClick={onClick}><i className="agree"/></button>
        </div>
    </Container>
}
