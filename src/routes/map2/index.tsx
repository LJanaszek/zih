import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Box from "../../components/layout/box";
import { getGamePageRoute, getHomeRoute } from "../routes";
import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback, useState } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import mapa from '../../assets/mapa2/mapaSzer.svg';
import pinezka from '../../assets/icons/pinezka.svg';
import Popup from "../../components/elements/popup";
/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */
// import meta

const Container = styled.div`
// background:black;
height: 20%;
#root{
    height: 25%;
}
height{
    30em;
}
body{
    height: 100%
    background: url(${mapa}) 50% 50% no-repeat;
}
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
    top: 15%;
    position: absolute;
    left: 10%;
    right: 10%;
    // z-index: 1;
    background: url(${mapa}) 50% 50% no-repeat;
    // background-size:70%;
    width: 80%;
    margin: 0 auto;
    border-radius: 50px;
    padding: 23% 0.01%;
    // height: 20em;
    // margin-top:3em;
    margin-bottom: 1em;
    // height: fit-content;
    // display:flex;
}
#footer{
    display:none;
    color: var(--color4);
}
#content>img{
    position:absolute;
    width:60%;
    margin: 0 auto;
    display: none;
}
nav{
    // width:70%;
    // margin: 0 auto;
    // background-color:var(--color2);
    // margin-bottom: 2em;
    // display:flex;
    // text-align: center;
}
.button{
    background:none;
    // margin: 0 auto;
    // width:80%;
    // margin-top:0.5em;
    // margin-right:1em;
    // display:flex;
    // font-size: 20px;
}
.icon1,.icon2,.icon3{
    width:3%;
    position: absolute;
}
.icon1{
    top:24.5%;
    left:47.5%
}

.icon,button{
    background-color:none;
}
.icon1{

}
// @media (max-width: 950px) {
//     .fill {
//         width: auto;
//         margin: auto;
//     }
//     #content{
//         display:block;
//     }
//     .shultz{
//         width: -webkit-fill-available;
//         height: fit-content;
//     }
//     #root{
//         width: 100%;
//         background: var(--color2);
//     }
//     nav{
//         display: flex;
//     }
//     .icon1,.icon2,.icon3{
//         margin: 0 auto;
//     }
    
//   }
`;

export default function MapPage() {

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
            <img src={mapa} alt="" />
            </div>
            <nav>

                {<button className="button" onClick={() => { setShowGPSInfo(true) }}>
                    <img className="icon1" src={pinezka} alt=""></img>
                    </button>}
                {<Link className="button" to={getGamePageRoute()}>
                    <img className="icon2" src={pinezka} alt=""></img>
                    </Link>}
                {<Link className="button" to={getHomeRoute()} onClick={() => { setShowGPSInfo(true) }}>
                    <img className="icon3" src={pinezka} alt=""></img> 
                    </Link>}
                </nav>
                
        </Box>

        {showGPSInfo && <Popup onClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>}
    </Container>
}
export{}