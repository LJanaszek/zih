import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { getEntryRoute, getGamePageRoute } from "../routes";
import { useCallback, useState } from "react";
import Popup from "../../components/elements/popup";
import Box from "../../components/layout/box";

const Container = styled.div`
    li {
        margin: .5em 0;
    }
    h2{
        font-size: 3em;
        font-weight:900
    }
    p{
        color:black
    }
    .sponsor {
        font-size: .8em;
        text-align: center;

        display: flex;
        flex-direction: column;

        max-width: 80vh;
        margin: 0 auto;

        &>* {
            margin: 1.5em auto;
        }

        img.mazowsze {
            width: 350px;
            max-width: 100%;
        }

        img.raszyn {
            width: 100px;
            max-width: 100%;
        }
    }
`;

export default function RulesPage() {

    const navigate = useNavigate()

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);

    return <Container>
        <Box>
            <h2>Instrukcja</h2>
            <p>Zanim rozpoczniesz grę, poznasz losy rodu Słonimskich i miejsca związane ze społecznością żydowską przedwojennej Warszawy, zapoznaj się z poniższą instrukcją:</p>
            <ul>
                <li>Do wzięcia udziału w grze niezbędne jest urządzenie mobilne z dostępem do Internetu.</li>
                <li>Gra wykorzystuje lokalizację urządzenia. Zostaniesz poproszony/a o udzielenie dostępu.</li>
                <li>Gra rozpoczyna się na ulicy Mazowieckiej 12 w Warszawie.</li>
                <li>Aby odblokować kolejne zadania musisz znaleźć się w pobliżu określonej lokalizacji.</li>
                <li>Informacja o lokalizacji kolejnych punktów będzie podawana na podstawie danych GPS.</li>
                <li>Gdy uda Ci się poprawnie wykonać zadanie na ekranie pojawi się przycisk (łapa symbol) pozwalający przejść dalej.</li>
                <li>Gdy na ekranie pojawi się przyciski (dowiedz się więcej symbol) kliknij go, aby dowiedzieć się więcej o danej postaci, miejscu lub wydarzeniu.</li>
            </ul>
            <p>Powodzenia!</p>
            <nav className="button-list">
                <Link to={getEntryRoute()} className="button-hand" />
            </nav>
        </Box>

        {showGPSInfo && <Popup onClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}

    </Container>
}
