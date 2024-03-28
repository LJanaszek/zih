import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getGamePageRoute, getHomeRoute, getRulesRoute } from "../routes";
import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback, useState } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import HomePagePopup from "../../components/elements/hppopup";
import WikiPopup from "../../components/wiki-popup";
import { useRef } from "react";
import logo2 from "../../assets/logoZih.png"
import homeImg from "../../assets/homePageInfo.png"
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
    margin:1em 0;
}
h3{
    // margin:0;
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
    row-gap: 10px;
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
.contentHome{
    margin-top:3em;
    font-size:1em;
    display:flex;
}
.contentHome>div{
    width:70%
}
.contentHome>div>img{
    width:inherit;
}
.with-icon{
    border-radius:1em;
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
                
                <div className="contentHome">
                    <div>
                        <img src={homeImg} alt="" />
                    </div>
                    <nav>

                        {!gameStarted &&
                            <Link className="button with-icon" to={getRulesRoute()} onClick={()=>{setShowGPSInfo(true)}}>Rozpocznij grę <i className="icon game-start" /></Link>
                        }

                        {gameStarted &&
                            <>
                                <Link className="button with-icon" to={getGamePageRoute()}>Kontynuuj grę</Link>
                                <Link className="button with-icon" to={getHomeRoute()} onClick={() => { onGameRestart() }}>Zrestartuj grę <i className="icon game-restart" /> </Link>
                            </>
                        }
                    </nav>
                </div>
            </div>
            <footer><img src={logo2} alt="" /></footer>
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
