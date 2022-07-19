import { useGameModuleState } from "..";

/**
 * Czy mamy już rozpoczętą grę
 */
export default function useGameStarted() {
    const {gameStarted} = useGameModuleState();

    return gameStarted;
}
