import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getGamePageRoute, getHomeRoute, getRulesRoute } from "../routes";
import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback, useState } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import logo from './instrukcja.jpg';
import HomePagePopup from "../../components/elements/hppopup";
import WikiPopup from "../../components/wiki-popup";
import { useRef } from "react";
import hand from "../../assets/right_hand.png";
import logo2 from "../../assets/logoZih.png"
const Container = styled.div`

.inner{
    background-color:var(--color2);
}
.fill{
    padding-bottom: 1em;
    width:100%;
}
h2,h3{
    text-transform: uppercase;
    font-weight: 900;
}
h2{
    font-size:3em
}
h3{
    font-size:1.5em;
}


.content{
    width: 84%;
    margin: 0 auto;
    border-radius: 50px;
    margin-top:2em;
    margin-bottom: 1em;
    height: fit-content;
    display:block;
    text-align:center;
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
    display:grid;
    text-align: center;
    justify-content: space-around;
    grid-template-rows: 3em 3em 3em;

}
.button{
    height:2em;
}
footer{
    margin: 0 auto;
    text-align:center;
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
                <div className="fill">
                    <h2>Słonimscy</h2>
                    <h3>gra terenowa</h3>
                </div>

                <nav>

                    {!gameStarted &&
                        <Link className="button with-icon" to= {getRulesRoute()}>Rozpocznij grę <i className="icon game-start" /></Link>
                    }

                    {gameStarted &&
                        <>
                            <Link className="button with-icon" to={getGamePageRoute()}>Kontynuuj grę</Link>
                            <Link className="button with-icon" to={getHomeRoute()} onClick={() => { onGameRestart() }}>Zrestartuj grę <i className="icon game-restart" /> </Link>
                        </>
                    }
                </nav>
                
            </div>
            <footer><img src={logo2} alt="" /></footer>
            {/* {PageFooter()} */}
        </Container>
        {
            showGPSInfo && <HomePagePopup onClick={goToGame}>
                <p className="divp">
                    Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry.<br /> Udziel dostępu, jeśli zostaniesz o to poproszony.
                </p>
            </HomePagePopup>
        }
        {
            showWikiPopup && <WikiPopup onClick={closeWikiPopup}>

            </WikiPopup>
        }
        
    </>
}
