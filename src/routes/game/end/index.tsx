import styled from "styled-components";
import useRemoveHeader from "../../../modules/main/hooks/use-remove-header";
import PageHeader from "../../../components/layout/header";
import PerazjaSrc from './perazja.png';
import { getHomeRoute } from "../../routes";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../utils/widgets/scroll-to-top";

const Container = styled.div`
    top:0;
    width:100%;
    min-height:100vh;
    text-align: center;

    background:var(--color3);

    .content{
        display: block;
        margin: 0 auto;
        text-align: center;
        color: var(--color1)
    }

    img {
        width: 100%;
    }

    @media (max-width: 1560px) {
        width:100%;
        img{
            width:90%;
        }
    }


`

export default function EndGamePage() {
    useRemoveHeader();

    return <Container>
        <ScrollToTop behavior="smooth" />
        <PageHeader theme={'violet'} />
        <div className="content">
            <h2>Gratulacje!</h2>
            <p>pełne hasło:</p>
        </div>
        <img src={PerazjaSrc} alt="" />
        <div className="button-list">
            <Link className="button inverted" to={getHomeRoute()}>Strona domowa<i className="icon home" /></Link>
        </div>

    </Container>
}
