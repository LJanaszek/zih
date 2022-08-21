import { useMemo, useEffect } from "react";
import { useGameModuleState } from "../../../../modules/game";
import useFinishGameStep from "../../../../modules/game/hooks/use-finish-game-step";
import useMultiGeoStep from "../../../../modules/game/hooks/use-multi-geo-step";
import useScenario from "../../../../modules/game/hooks/use-scenario";
import { GAME_STEP_TYPE, GeoStep } from "../../../../modules/game/types";

export default function useMultiGeoViewData(stepId: string) {
    const { completedSteps } = useGameModuleState();
    const step = useMultiGeoStep(stepId)
    const scenario = useScenario();
    const finishStep = useFinishGameStep();

    const geoPoints = scenario.steps
        .filter(s => (step?.stepsId || []).includes(s.id))
        .filter(s => s.type === GAME_STEP_TYPE.GEO_STEP) as GeoStep[];

    const result = useMemo(() => {
        return {
            step,
            noCompletedPoints: geoPoints.filter(p => !completedSteps.includes(p.id)),
            completedPoints: geoPoints.filter(p => completedSteps.includes(p.id)),
        }
    }, [geoPoints, completedSteps, step]);

    // Jeżeli gracz zaliczył już określoną ilość punktów to wykonujemy `finishStep`
    useEffect(() => {
        if (step && result.completedPoints.length >= step.minVisitedPoints) {
            finishStep(step.id);
        }
    }, [result, finishStep, step]);

    return result
}
