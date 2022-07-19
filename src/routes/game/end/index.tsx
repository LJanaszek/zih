import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../../../components/layout/box";
import { getHomeRoute } from "../../routes";
import ScrollToMe from "../../../utils/widgets/scroll-to-me";

const Container = styled.div``;

export default function EndGamePage() {
    return <Container>
        <ScrollToMe behavior="smooth" />
        <Box>
            <h2>Drodzy gracze</h2>
            <p>Dziękujemy wam za wzięcie udziału w naszej grze.</p>
        </Box>
        <nav className="button-list actions">
            <Link to={getHomeRoute()} className="button">Koniec</Link>
        </nav>

    </Container>
}
