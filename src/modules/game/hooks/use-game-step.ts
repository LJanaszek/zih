import { useGameModuleState } from "..";
import useScenario from "./use-scenario";

/**
 * Zwraca dane kroku gry.
 * Jeżeli nie zostanie podany `stepId` to zwraca aktywny step
 */
export default function useGameStep(stepId?: string) {
    const { activeGameStep } = useGameModuleState();

    const scenario = useScenario();

    return scenario.steps.find(s => {
        return s.id === (stepId || activeGameStep);
    })
}
