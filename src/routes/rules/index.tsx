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
    h2{
        font-size: 4em;
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur aliquam deleniti suscipit laboriosam, accusantium voluptas voluptate esse similique nisi autem provident molestias magni amet quae accusamus ducimus maxime officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptas optio autem ipsum. Eius veniam est impedit ratione distinctio sed cupiditate alias, aspernatur repudiandae consequuntur repellendus corporis expedita facere dicta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quis assumenda dolor sit omnis quasi aspernatur laboriosam sed architecto alias doloribus, officiis velit repellendus, delectus aliquid esse minus, ratione asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A iusto ea fugit corporis doloremque excepturi reiciendis. Iusto eum esse voluptatum. Qui consequuntur mollitia reiciendis ipsum vero, inventore rerum aliquid expedita.</p>
            {/* <ul>
                <li>Do wzięcia udziału w rozgrywce potrzebujesz smartfona lub tablet z dostępem do Internetu.</li>
                <li>Gra wykorzystuje aparat i lokalizację urządzenia. Aby zagrać, udziel zgody, gdy zostaniesz zapytany/zapytana o udzielenie dostępu.</li>
                <li>Początek gry znajduje się przy tzw. „Kapliczce Godebskiego" mieszczącej się pod adresem Cypriana Godebskiego 19 w Raszynie.</li>
                <li>Gra jest przeznaczona dla zespołów, ale można wziąć w niej udział pojedynczo.</li>
                <li>Informacja o lokalizacji kolejnych punktów będzie podawana na podstawie danych GPS.</li>
                <li>Przemieszczając się pomiędzy kolejnymi miejscami – zachowaj ostrożność.</li>
                <li>Gdy w zadaniach zobaczysz ikonę ? – kliknij, aby przeczytać treść pomocy.</li>
            </ul> */}
            <nav className="button-list">
                <button className="button-hand" onClick={() => { setShowGPSInfo(true) }}></button>
            </nav>
        </Box>

        {showGPSInfo && <Popup onClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}

    </Container>
}
