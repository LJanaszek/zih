import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { getEntryRoute, getGamePageRoute } from "../routes";
import { useCallback, useState } from "react";
import Popup from "../../components/elements/popup";
import hand from "../../assets/right_hand.png"
import info from "../../assets/icons/info.png"
import style from "./style.module.scss"
const Container = styled.div`
    width:80%;
    
    margin: 0 auto;
    *{font-family: Bristol;}
    
    ul{
        line-height: 1.5em;
        color: black;
    }
    li {
        margin: .5em 0;
    }
    h2{
        font-size: 3em;
        // font-weight:900;
        font-family: Bristol;
        text-transform: uppercase;
    }
    p{
        color:var(--color1);
    }
    nav{
        position: relative;
    }
    img{
        width: 2em;
    }
`;

export default function RulesPage() {

    const navigate = useNavigate()

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);

    return <Container>
        <div>
            <h2>Zasady</h2>
            <p>Zanim rozpoczniesz grę i poznasz losy rodu Słonimskich, zapoznaj się z poniższą instrukcją:</p>
            <ul>
                <li>Do wzięcia udziału w grze niezbędne jest urządzenie mobilne z dostępem do Internetu.</li>
                <li>
                Grę uruchom w poziomej orientacji ekranu.
                </li>
                <li>Gra wykorzystuje lokalizację urządzenia. Zostaniesz poproszony/a o udzielenie dostępu.</li>
                <li>Gra rozpoczyna się na ulicy Mazowieckiej 12 w Warszawie.</li>
                <li>Aby odblokować kolejne zadania, musisz znaleźć się w pobliżu określonej lokalizacji.</li>
                <li>Informacja o lokalizacji kolejnych punktów będzie podawana na podstawie danych GPS.</li>
                <li>Gdy uda Ci się poprawnie wykonać zadanie, na ekranie pojawi się przycisk <img src={hand} alt="" /> pozwalający przejść dalej.</li>
                <li>Gdy na ekranie pojawi się przycisk <img src={info} alt="" className={style.imgInfo}/> kliknij go, aby dowiedzieć się więcej o danej postaci, miejscu lub wydarzeniu.</li>
            </ul>
            <p>Powodzenia!</p>
            <nav className="button-list">
                <Link to={getEntryRoute()} className="button-hand" />
            </nav>
        </div>

        {showGPSInfo && <Popup onClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}

    </Container>
}
