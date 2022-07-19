import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "../../components/layout/box";
import { getRulesPageRoute, getGamePageRoute } from "../routes";

import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";

const Container = styled.div`
`;

export default function HomePage() {

    const gameStarted = useGameStarted();
    const dispatch = useGameModuleDispatch();

    const onGameRestart = useCallback(() => {
        dispatch({
            type: GAME_MODULE_ACTION.RESET_GAME
        });
    }, [dispatch]);

    return <Container>
        <Box>
            <h2>Witaj</h2>
            <p>To jest strona główna</p>
            <nav>
                {!gameStarted && <Link className="button" to={getRulesPageRoute()}>Gra mobilna</Link>}
                {gameStarted && <Link className="button" to={getGamePageRoute()}>Kontynuuj grę</Link>}
            </nav>
            {gameStarted && <div className="button-list">
                <Link className="button" to={getRulesPageRoute()} onClick={onGameRestart}>Zrestartuj grę</Link>
            </div>}
        </Box>
    </Container>
}
