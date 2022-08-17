import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../../../components/layout/box";
import { getHomeRoute } from "../../routes";
import ScrollToMe from "../../../utils/widgets/scroll-to-me";
import end from "../img/end.svg";
const Container = styled.div`
.inner{
    background-color:var(--color2);
}
img{
    width:90%;
    display: block;
    margin: 0 auto;
    border-radius: 50px;
}
h2{
    color:var(--color1);
    font-family: didactic-gothic;
}
.content{
    background:white;
    border-radius: 50px;
    width:80%;
    padding:5% 5%;
    margin: 0 auto;
    margin-top:1.5em;
    margin-bottom: 2em;
}
p{
    width:auto;
    @media (max-width: 490px) {
        font-size: 18px;
    }
}
.header-content{
    margin-top:0;
}

`
;

export default function EndGamePage() {
    return <Container>
        <ScrollToMe behavior="smooth" />
        <Box>
            <h2>Zakończenie</h2>
            <img src={end} alt="" />
            <div className="content">
            <h2 className="header-content">Zakończenie</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aspernatur voluptatibus, voluptate nobis vel dolores, praesentium dolore ad facilis enim maiores ipsa. Excepturi, vitae quod? Similique corrupti ratione consequatur magnam.</p></div>        
        </Box>
        <nav className="button-list actions">
            <Link to={getHomeRoute()} className="button">Koniec</Link>
        </nav>

    </Container>
}
