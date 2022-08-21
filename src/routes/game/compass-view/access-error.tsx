import { Link } from "react-router-dom";
import styled from "styled-components";
import rozaIcon from '../../../assets/roza.svg';
import { getHomeRoute } from "../../routes";


const Container = styled.div`

    width: 100%;
    max-width: 1200px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    color: var(--color1);

    border: none;

    .inner {

        padding-top: 20vh;

        background: url(${rozaIcon}) 50% 0 no-repeat;
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

export default function AccessError() {
    return <Container>
        <div className="inner">

            <div className="box">
                <h3>Błąd uprawnień.</h3>
                <p>Gra nie uzyskała dostępu do lokalizacji urządzenia. <br />Przyznaj uprawnienia stronie z grą, a następnie odśwież stronę.</p>
                <p>Upewnij się, że korzystasz z urządzenia z modułem gps.</p>
            </div>
            <div className="buttons">
                <Link to={getHomeRoute()} className="button">Powrót do strony głównej</Link>
            </div>
        </div>
    </Container>
}
