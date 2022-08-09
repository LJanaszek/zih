import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Box from "../../components/layout/box";
import { getRulesPageRoute, getGamePageRoute } from "../routes";
import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback, useState } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import logo from './instrukcja.png';
import GameRestart from '../game/img/ikonsButton/zrestartuj.svg';
import GameStart from '../game/img/ikonsButton/uruchom.svg';
import GameContinue from '../game/img/ikonsButton/kontynuujGre.svg';
import Knowledge from '../game/img/ikonsButton/bazaWiedzy.svg';
import Popup from "../../components/elements/popup";
/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */
// import meta

const Container = styled.div`
.inner{
    background-color:var(--color2);
}
.fill{
    display: block;
    background-color: white;
    border-radius: 50px;
    width: 50%;
    margin-left: 15%;
}
p{
    padding: 1em;
    width: auto;
    margin: 0 auto;
    
}
.shultz{
    height: auto;
    width: 45%;
    border-radius: 50px;
    border: 1px solid var(--color1);
}
#content{
    
    width: 80%;
    margin: 0 auto;
    border-radius: 50px;
    padding: 0.5em 1.5em;
    // height: 20em;
    margin-top:3em;
    margin-bottom: 1em;
    height: fit-content;
    display:flex;
}
nav{
    width:70%;
    margin: 0 auto;
    background-color:var(--color2);
    margin-bottom: 2em;
    display:flex;
    text-align: center;
}
.button{
    margin: 0 auto;
    width:80%;
    margin-top:0.5em;
    // margin-right:1em;
    // display:flex;
    font-size: 20px;
}


.icon{
    height: 1.5rem;
    vertical-align: middle;
    margin-left: 0.5em;
}
@media (max-width: 950px) {
    .fill {
        width: auto;
        margin: auto;
    }
    #content{
        display:block;
    }
    .shultz{
        width: -webkit-fill-available;
        height: fit-content;
    }
    #root{
        width: 100%;
        background: var(--color2);
    }
    nav{
        display: block;
    }
    .icon{
        margin: 0 auto;
    }
    
  }
`;

export default function HomePage() {

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

    return <Container>
        <Box>
            
            <div id='content'>
            <img className="shultz" src={logo} alt="dupa" />
            
            
            <div className="fill">
            <h2>Instrukcja</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quae illo nisi illum accusantium deleniti obcaecati, vel magni suscipit consequatur, voluptatum ratione atque distinctio quidem architecto? Quis modi quidem corporis!</p>
            </div>
            </div>
            <nav>

                {!gameStarted && <button className="button" onClick={() => { setShowGPSInfo(true) }}>Rozpocznij grę <img className="icon" src={GameStart} alt=""></img></button>}
                {gameStarted && <Link className="button" to={getGamePageRoute()}>Kontynuuj grę <img className="icon" src={GameContinue} alt=""></img></Link>}
            
            {gameStarted &&
                <Link className="button" to={getRulesPageRoute()} onClick={onGameRestart}>Zrestartuj grę <img className="icon" src={GameRestart} alt=""></img> </Link>}
                <a href="baza_wiedzy.pdf" className="button">Baza wiedzy<img className="icon" src={Knowledge} alt=""></img> </a></nav>
        </Box>

        {showGPSInfo && <Popup onClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}
    </Container>
}