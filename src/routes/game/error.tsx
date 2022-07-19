import styled from "styled-components";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";

const Container = styled.div``;

export default function GameErrorPage() {

    const dispatch = useGameModuleDispatch();

    return <Container>
        <p>Coś jest nie tak ze stanem gry</p>
        <button onClick={() => {
            dispatch({
                type: GAME_MODULE_ACTION.RESET_GAME
            })
        }}>Zresetuj grę</button>
    </Container>
}
