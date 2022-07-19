import createStore from "../../utils/store";
import reducer from "./reducer";
import { SCENARIO } from "./scenario";
import { GameScenario } from "./types";

const GAME_MODULE_LS_KEY = 'raszyn:game-v3'

export type GameModuleState = {
    scenario: GameScenario,
    activeGameStep?: string,
    completedSteps: string[],
    gameStarted: boolean,
    gameComplete: boolean,
    ignoreAccuracy: boolean
}

export const initGameModuleState: GameModuleState = {
    scenario: SCENARIO,
    activeGameStep: SCENARIO.startStep,
    completedSteps: [],
    gameStarted: false,
    gameComplete: false,
    ignoreAccuracy: false,
}


export enum GAME_MODULE_ACTION {
    SET_POINT_POSITION,
    SET_IGNORE_ACCURACY,
    START_GAME,
    RESET_GAME,
    SET_GAME_STEP,
    END_GAME,
    COMPLETE_STEP,
    PLACE_DEBUG_POINTS
}

export type GameModuleAction = {
    type: GAME_MODULE_ACTION,
    payload?: any
}

const [
    GameModuleProvider,
    useGameModuleDispatch,
    useGameModuleState
] = createStore(reducer, initGameModuleState, GAME_MODULE_LS_KEY)


export {
    GameModuleProvider,
    useGameModuleDispatch,
    useGameModuleState
}
