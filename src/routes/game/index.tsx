import { useEffect } from "react";
import { useMemo } from "react";
import styled from "styled-components";
import SingleCompassView from "./compass-view/single";
import DebugTools from "../../components/dev/debug-tools";
import { useConfigModuleState } from "../../modules/config";
import { GAME_MODULE_ACTION, useGameModuleDispatch, useGameModuleState } from "../../modules/game";
import useGameStep from "../../modules/game/hooks/use-game-step";
import { GameStep, GAME_STEP_TYPE } from "../../modules/game/types";
import EndGamePage from "./end";
import GameErrorPage from "./error";
import PageView from "./page";
import WidgetView from "./task";
import MultiPointCompassView from "./compass-view/multi";
import { GeoModuleProvider } from "../../modules/geo";

const Container = styled.div`
`;

export default function GamePage() {

    const step = useGameStep();
    const { gameComplete } = useGameModuleState();
    const dispatch = useGameModuleDispatch();
    const { showDebug } = useConfigModuleState();

    useEffect(() => {
        dispatch({
            type: GAME_MODULE_ACTION.START_GAME
        });
    }, [dispatch]);

    return <Container>
        {!gameComplete && !step && <GameErrorPage />}
        {!gameComplete && step && <GameStepView step={step} />}
        {gameComplete && <EndGamePage />}
        {showDebug && <DebugTools />}
    </Container>
}

function GameStepView({ step }: { step: GameStep }) {
    return useMemo(() => {
        switch (step.type) {
            case GAME_STEP_TYPE.GEO_STEP:
                return <GeoModuleProvider>
                    <SingleCompassView pointId={step.id} />
                </GeoModuleProvider>

            case GAME_STEP_TYPE.TASK:
                return <WidgetView id={step.id} />

            case GAME_STEP_TYPE.PAGE:
                return <PageView id={step.id} />

            case GAME_STEP_TYPE.MULTI_GEO_STEP:
                return <GeoModuleProvider>
                    <MultiPointCompassView stepId={step.id} />
                </GeoModuleProvider>

            default:
                return <GameErrorPage />
        }
    }, [step]);
}
