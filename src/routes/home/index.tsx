import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getGamePageRoute, getHomeRoute } from "../routes";
import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback, useState } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import logo from './instrukcja.jpg';
import HomePagePopup from "../../components/elements/hppopup";
import WikiPopup from "../../components/wiki-popup";
import { useRef } from "react";
import PageFooter from './../../components/layout/footer';
import HelpIconSrc from '../../assets/icons/help.svg';

const Container = styled.div`

.inner{
    background-color:var(--color2);
}
.fill{
    font-family: Gothic;
    grid-column: 2;
    grid-row: span 2;

    display: grid;
    background-color: white;
    border-radius: 2em;
    flex: 0 0 54%;
    padding-bottom: 2em;
    padding-top:0.5em;
    width:110%;
}
h2{
    font-family: Gothic;
}
ul{
    padding: 0em 1em;
    width: 80%;
    margin: 0 auto;
}

li::marker{
    color:var(--color1);
}

.img-shulz {
    display: grid;
    grid-column:1;
    flex: 0 0 39%;

    img {
        margin-top:0;
        height: auto;
        width: 100%;
        border-radius: 4rem;
        border: 1px solid var(--color1);
    }
}


.content{
    grid-gap:2em;
    width: 84%;
    margin: 0 auto;
    border-radius: 50px;
    margin-top:2em;
    margin-bottom: 1em;
    height: fit-content;
    display:grid;
    justify-content: space-between;

    figure {
        margin: 0;
    }

    blockquote {
        margin: 0;
        font-style: italic;
        text-align: center;
    }

    figcaption {
        font-size: .8em;
        text-align: right;
        padding: 0 0.6em;
    }
}

p{
    padding:0em 3em;
    padding-bottom: 2em;
}

nav{

    grid-column:1;
    grid-row: 2;
    width:70%;
    margin: auto;
    background-color:var(--color2);
    margin-bottom: 10em;
    display:grid;
    text-align: center;
    justify-content: space-around;
    grid-template-rows: 3em 3em 3em;

}
.button{
    height:2em;
}

@media (max-width: 1439px) {

    .fill {
        display: block;
        width: auto;
        margin: auto;
        font-size: 18px;
    }
    .content{
        display:block;
        align-items: center;
    }
    .img-shulz img{
        display:block;
        margin: 0 auto;
        margin-bottom: 2em;
    }
    #root{
        width: 100%;
        background: var(--color2);
    }
    nav{
        display: block;
        grid-column: null;
        margin-top: 2em;
        margin-bottom: 2em;
        width: 12em;
    }
    .button{
        font-size: 16px;
        line-height: 2.2em;
        display: block;
        margin:auto;
        width:inherit;
        margin-bottom: 1em;
        height:3em;
    }
    .icon{
        margin: 0 auto;
        vertical-align: middle;
    }
    p{
        padding:0.6em;

  }
  }
`;

export default function HomePage() {
    const [showWikiPopup, setShowWikiPopup] = useState(false);
    const navigate = useNavigate()

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);

    const gameStarted = useGameStarted();
    const dispatch = useGameModuleDispatch();

    const onGameRestart = useCallback(() => {
        dispatch({
            type: GAME_MODULE_ACTION.RESET_GAME
        });
    }, [dispatch]);
    const wikiRef = useRef<HTMLButtonElement>(null);
    const closeWikiPopup = useCallback(() => {
        setShowWikiPopup(false)
        wikiRef.current?.focus();
    }, [setShowWikiPopup]);

    return <>
        <Container>
            <div className='content'>
                <div className="img-shulz">
                    <img src={logo} alt="" />
                </div>


                <div className="fill">
                    <h2>Instrukcja</h2>
                    <p>Zapraszamy do udziału w inspirowanej twórczością Brunona Schulza grze terenowej zlokalizowanej w Falenicy. Poprowadzimy was przez miejsca, o których pamięć powoli zanika. Poznacie ich historię i spojrzycie na nie z perspektywy życia i twórczości artysty.<br />
                        Zanim rozpoczniecie grę, koniecznie zapoznajcie się z poniższą instrukcją.
                    </p>
                    <ul>
                        <li>Do wzięcia udziału w grze niezbędne jest urządzenie mobilne z dostępem do Internetu.</li>
                        <li>Gra wykorzystuje aparat i lokalizację urządzenia. Zostaniecie poproszeni o udzielenie dostępu.</li>
                        <li>By móc rozpocząć grę, musicie ją uruchomić na terenie Falenicy.</li>
                        <li>Gra jest przeznaczona dla zespołów, ale można wziąć w niej udział pojedynczo.</li>
                        <li>Informacja o lokalizacji kolejnych punktów będzie podawana na podstawie danych GPS.</li>
                        <li>Przemieszczając się pomiędzy kolejnymi punktami – zachowajcie ostrożność.</li>
                        <li>Gdy w zadaniach zobaczycie ikonę <img src={HelpIconSrc} alt="ikona pomocy" style={{ width: '1em' }} />, możecie na nią kliknąć, aby zapoznać się ze wskazówkami.</li>
                    </ul>
                    <p>Po ukończeniu gry poznacie hasło do bazy wiedzy, w której zamieściliśmy materiały rozszerzające tematy poruszone w grze.</p>
                    <figure>
                        <blockquote>
                            <p>
                                Tak tedy będziemy zbierali te aluzje, te ziemskie przybliżenia,<br />
                                te stacje i etapy po drogach naszego życia,<br />
                                jak ułamki potłuczonego zwierciadła.
                            </p>
                        </blockquote>
                        <figcaption>Księga, Bruno Schulz</figcaption>
                    </figure>
                </div>

                <nav>

                    {!gameStarted &&
                        <button className="button with-icon" onClick={() => { setShowGPSInfo(true) }}>Rozpocznij grę <i className="icon game-start" /></button>
                    }

                    {gameStarted &&
                        <>
                            <Link className="button with-icon" to={getGamePageRoute()}>Kontynuuj grę <i className="icon game-continue" /></Link>
                            <Link className="button with-icon" to={getHomeRoute()} onClick={() => { onGameRestart() }}>Zrestartuj grę <i className="icon game-restart" /> </Link>
                        </>
                    }

                    <button className="button with-icon" ref={wikiRef} onClick={() => { setShowWikiPopup(true) }} >Baza wiedzy <i className="icon knowledge" /></button>
                </nav>
            </div>

            {PageFooter()}
        </Container>
        {
            showGPSInfo && <HomePagePopup onClick={goToGame}>
                <p className="divp">
                    Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry.<br /><br /> Udziel dostępu, jeśli zostaniesz o to poproszony.
                </p>
            </HomePagePopup>
        }
        {
            showWikiPopup && <WikiPopup onClick={closeWikiPopup}>

            </WikiPopup>
        }
    </>
}
