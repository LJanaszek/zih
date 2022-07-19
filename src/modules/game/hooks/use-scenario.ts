import { useGameModuleState } from "..";

/**
 * Zwraca aktualny scenariusz gry
 */
export default function useScenario() {
    const {scenario} = useGameModuleState();

    return scenario;
}
