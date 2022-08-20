import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import styled from "styled-components";
import CompassDebugTools from "../../../../components/dev/compass-debug-tools";
import Popup from "../../../../components/elements/popup";
import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header";
import { useConfigModuleState } from "../../../../modules/config";
import { useGameModuleState } from "../../../../modules/game";
import useFinishGameStep from "../../../../modules/game/hooks/use-finish-game-step";
import useMultiGeoStep from "../../../../modules/game/hooks/use-multi-geo-step";
import useScenario from "../../../../modules/game/hooks/use-scenario";
import { GAME_STEP_TYPE, GeoStep, MultiGeoStep } from "../../../../modules/game/types";
import { GeoModuleProvider } from "../../../../modules/geo";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import ScrollToMe from "../../../../utils/widgets/scroll-to-me";
import GameErrorPage from "../../error";
import MultiPointCompassViewContent from "./content";
import GeoPointDrawer from "./geo-point-drawer";

type ScreenState = {
    step: MultiGeoStep | null,
    noCompletedPoints: GeoStep[],
    completedPoints: GeoStep[],
    selectedStep: GeoStep | null,
    openDrawer: boolean
}

type ScreenAction = {
    type: 'selectPoint' | 'toggleDrawer',
    payload?: {
        pointId?: string
    }
}

const MapScreenContainer = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;

    .map-wrapper {
        flex-grow: 1;
        position: relative;
        margin: 1em;
    }

    .drawer {
        height: 10%;
        position: relative;
    }
`;

/**
 * Wrapper przygotowywujący dane dla kroku z wieloka puktami geograficznymi
 */
export default function MultiPointCompassView({ stepId }: { stepId: string }) {
    useRemoveHeader();

    const { showDebug } = useConfigModuleState();
    const { step, noCompletedPoints } = useMultiGeoViewData(stepId);
    const [showHelp, setShowHelp] = useState(false);

    const [{ selectedStep, openDrawer }, reducer] = useReducer((state: Pick<ScreenState, 'selectedStep' | 'openDrawer'>, action: ScreenAction) => {

        switch (action.type) {
            case 'selectPoint':
                const point = noCompletedPoints.find(p => p.id === action.payload?.pointId);

                if (point) {
                    return {
                        ...state,
                        openDrawer: true,
                        selectedStep: point
                    }
                }
                break;

            case 'toggleDrawer':
                return {
                    ...state,
                    openDrawer: !state.openDrawer
                }
        }

        return state;
    }, {
        selectedStep: null,
        openDrawer: false
    });

    const onPointClicked = useCallback((id: string) => {
        reducer({
            type: 'selectPoint',
            payload: {
                pointId: id
            }
        })
    }, [reducer]);

    return <GeoModuleProvider>
        <FillScreenWithHeader>
            <ScrollToMe trigger={step?.id} behavior="smooth" />
            <MapScreenContainer>
                {step && <>
                    <div className="map-wrapper">
                        <MultiPointCompassViewContent activePoint={selectedStep?.id} geoSteps={noCompletedPoints} onPointClicked={onPointClicked} />
                    </div>
                    <div className="buttons">
                        <button className="button" onClick={() => { setShowHelp(true) }}>Pomoc<i className="icon help" /></button>
                    </div>
                    <div className="drawer">
                        <GeoPointDrawer step={selectedStep} isOpen={openDrawer} onToggleClicked={() => reducer({ type: 'toggleDrawer' })} />
                    </div>
                </>}
                {!step && <GameErrorPage />}
            </MapScreenContainer>
        </FillScreenWithHeader>
        {showHelp && <Popup onClick={() => { setShowHelp(false) }}>
            <p>
                Kliknij w pinezkę na mapie aby sprawdzić odległość dzielącą Cię w prostej linii od wybranej lokalizacji. Możesz dowolnie zmieniać wybór. Po dojściu do lokalizacji, automatycznie wczyta się związany z nią ekran gry.
            </p>
        </Popup>}
        {showDebug && <CompassDebugTools />}
    </GeoModuleProvider>
}

function useMultiGeoViewData(stepId: string) {
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
    }, [geoPoints, completedSteps]);

    // Jeżeli gracz zaliczył już określoną ilość punktów to wykonujemy `finishStep`
    useEffect(() => {
        if (step && result.completedPoints.length >= step.minVisitedPoints) {
            finishStep(step.id);
        }
    }, [result, finishStep]);

    return result
}
