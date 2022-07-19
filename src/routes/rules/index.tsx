import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { getGamePageRoute } from "../routes";
import { useCallback, useState } from "react";
import Popup from "../../components/elements/popup";
import Box from "../../components/layout/box";

const Container = styled.div`
    li {
        margin: .5em 0;
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

            <ul>
                <li>Do wzięcia udziału w rozgrywce potrzebujesz smartfona lub tablet z dostępem do Internetu.</li>
                <li>Gra wykorzystuje aparat i lokalizację urządzenia. Aby zagrać, udziel zgody, gdy zostaniesz zapytany/zapytana o udzielenie dostępu.</li>
                <li>Początek gry znajduje się przy tzw. „Kapliczce Godebskiego" mieszczącej się pod adresem Cypriana Godebskiego 19 w Raszynie.</li>
                <li>Gra jest przeznaczona dla zespołów, ale można wziąć w niej udział pojedynczo.</li>
                <li>Informacja o lokalizacji kolejnych punktów będzie podawana na podstawie danych GPS.</li>
                <li>Przemieszczając się pomiędzy kolejnymi miejscami – zachowaj ostrożność.</li>
                <li>Gdy w zadaniach zobaczysz ikonę ? – kliknij, aby przeczytać treść pomocy.</li>
            </ul>
            <nav className="button-list">
                <button className="button" onClick={() => { setShowGPSInfo(true) }}>Dalej</button>
            </nav>
        </Box>

        {showGPSInfo && <Popup onClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}

    </Container>
}
