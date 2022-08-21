import styled from "styled-components";
import CONFIG from "../../../config";
import { useGeo } from "../../../modules/geo";
import rozaIcon from '../../../assets/roza.svg';
import { Link } from "react-router-dom";
import { getHomeRoute } from "../../routes";


const Container = styled.div`

    width: 100%;
    max-width: 1200px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border: none;

    .inner {

        padding-top: 20vh;

        background: url(${rozaIcon}) 50% 1vh no-repeat;
        background-size: auto 15vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .box {
        background: white;
        border-radius: 5rem;
        padding: 2rem;
        width: calc(100% - 4rem);

        text-align: center;
        line-height: 2em;
    }

    .buttons {
        margin-top: 2em;
    }

    @media (max-width: 1200px) {
        .box {
            border-radius: 0;
        }
    }
`;

export default function AccuracyError() {

    const { accuracy } = useGeo();

    return <Container>
        <div className="inner">
            <div className="box">
                <h3>Zaczekaj chwilę, trwa kalibracja urządzenia!</h3>
                <p>
                    Twoje urządzenie musi udostępniać lokalizację z dokładnością przynajmniej{'\u00A0'}<strong>{CONFIG.MIN_GEO_ACCURACY} metrów</strong>.
                </p>
                <p>
                    Aktualna dokładność pomiaru: <strong>{Math.round(accuracy || 0)} metrów</strong>.
                </p>
                <p>
                    Upewnij się, że korzystasz z urządzenia z modułem gps.
                </p>
            </div>
            <div className="buttons">
                <Link to={getHomeRoute()} className="button">Powrót do strony głównej</Link>
            </div>
        </div>
    </Container>
}
