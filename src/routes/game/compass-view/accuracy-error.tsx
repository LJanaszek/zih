import styled from "styled-components";
import CONFIG from "../../../config";
import { useGeo } from "../../../modules/geo";
import compassIcon from '../../../assets/icons/kierunek.svg';


const Container = styled.div`
    background: white;
    border-radius: 5rem;

    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    .inner {
        padding: 4rem 4rem 1rem;
        background: url(${compassIcon}) 50% 1rem no-repeat;
        background-size: auto 2rem;

        text-align: center;
        line-height: 2em;
    }

    @media (max-width: 1200px) {
        border-radius: 0;
        border-top: 10px solid var(--color3);
    }
`;

export default function AccuracyError() {

    const { accuracy } = useGeo();

    return <Container>
        <div className="inner">
            <h3>Zaczekaj chwilę, trwa kalibracja urządzenia!</h3>
            <p>
                Twoje urządzenie musi udostępniać lokalizację z dokładnością przynajmniej{'\u00A0'}<strong>{CONFIG.MIN_GEO_ACCURACY} metrów</strong>.
            </p>
            <p>
                Aktualna dokładność pomiaru: <strong>{Math.round(accuracy || 0)} metrów</strong>.
            </p>
        </div>
    </Container>
}
