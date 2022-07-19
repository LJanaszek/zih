import { GAME_STEP_TYPE } from "../types";
import useGameStep from "./use-game-step";

/**
 * Zwraca krok gry o podanym ID jeżeli jest to krok typu `GAME_STEP_TYPE.GEO_STEP`
 */
export default function usePageStep(id: string) {
     const step = useGameStep(id);

     return step?.type === GAME_STEP_TYPE.PAGE ? step : null;
}
