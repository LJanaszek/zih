import { useEffect } from "react";
import CompassDebugTools from "../../../../components/dev/compass-debug-tools";
import { useConfigModuleState } from "../../../../modules/config";
import { useGameModuleState } from "../../../../modules/game";
import useFinishGameStep from "../../../../modules/game/hooks/use-finish-game-step";
import useMultiGeoStep from "../../../../modules/game/hooks/use-multi-geo-step";
import useScenario from "../../../../modules/game/hooks/use-scenario";
import { GAME_STEP_TYPE, GeoStep } from "../../../../modules/game/types";
import { GeoModuleProvider } from "../../../../modules/geo";
import ScrollToMe from "../../../../utils/widgets/scroll-to-me";
import GameErrorPage from "../../error";
import MultiPointCompassViewContent from "./content";


/**
 * Wrapper przygotowywujący dane dla kroku z wieloka puktami geograficznymi
 */
export default function MultiPointCompassView({ stepId }: { stepId: string }) {

    const { showDebug } = useConfigModuleState();
    const {step, noCompletedPoints, completedPoints} = useMultiGeoViewData(stepId);

    return <>
        {step && <GeoModuleProvider>
            <ScrollToMe trigger={step.id} behavior="smooth" />
            <MultiPointCompassViewContent geoSteps={noCompletedPoints} />
            <p>
                <h3>Zaliczone punkty:</h3>
                <pre>
                {
                    JSON.stringify(completedPoints, null, 2)
                }
                </pre>
            </p>
            {showDebug && <CompassDebugTools />}
        </GeoModuleProvider>}
        {!step && <GameErrorPage />}
    </>
}

function useMultiGeoViewData(stepId: string) {
    const {completedSteps} = useGameModuleState();
    const step = useMultiGeoStep(stepId)
    const scenario = useScenario();
    const finishStep = useFinishGameStep();

    const geoPoints = scenario.steps
        .filter(s => (step?.stepsId || []).includes(s.id))
        .filter(s => s.type === GAME_STEP_TYPE.GEO_STEP) as GeoStep[];

    const completedPoints = geoPoints.filter(p => completedSteps.includes(p.id));

    const noCompletedPoints = geoPoints.filter(p => !completedSteps.includes(p.id));

    // Jeżeli gracz zaliczył już określoną ilość punktów to wykonujemy `finishStep`
    useEffect(() => {
        if (step && completedPoints.length >= step.minVisitedPoints) {
            finishStep(step.id);
        }
    }, [completedPoints, step, finishStep]);

    return {
        step,
        noCompletedPoints,
        completedPoints
    }
}
