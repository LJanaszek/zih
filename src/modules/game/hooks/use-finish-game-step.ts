import { useCallback } from "react";
import { useNavigate } from "react-router";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "..";
import useGameStep from "./use-game-step";
import useScenario from "./use-scenario";

/**
 * Hook udostępniający funkcję do zaliczania punktu
 *  - jeżeli to był punkt geo to dodaje go do listy znalezionych punktów
 *  - przechodzi do `nextStep` zaliczonego punktu
 **/
export default function useFinishGameStep() {
    const dispatch = useGameModuleDispatch();
    const activeGameStep = useGameStep();
    const navigate = useNavigate();
    const scenario = useScenario();

    return useCallback((stepId?: string) => {
        const step = scenario.steps.find(s => s.id === stepId) || activeGameStep;

        if (!step) {
            navigate('/error');
        }

        dispatch({
            type: GAME_MODULE_ACTION.COMPLETE_STEP,
            payload: {
                stepId
            }
        })

        if (step?.nextStep) {
            dispatch({
                type: GAME_MODULE_ACTION.SET_GAME_STEP,
                payload: {
                    id: step.nextStep
                }
            })
        } else {
            dispatch({
                type: GAME_MODULE_ACTION.END_GAME
            })
        }
    }, [activeGameStep, dispatch, navigate, scenario])
}
