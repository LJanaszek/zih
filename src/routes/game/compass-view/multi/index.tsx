import { useCallback, useReducer, useState } from "react";
import styled from "styled-components";
import CompassDebugTools from "../../../../components/dev/compass-debug-tools";
import TaskPopup from "../../../../components/elements/task-popup";
import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header";
import PageHeader from "../../../../components/layout/header";
import SmallPageHeader from "../../../../components/layout/header/small-header";
import { useConfigModuleState } from "../../../../modules/config";
import { GeoStep, MultiGeoStep } from "../../../../modules/game/types";
import useCompassView from "../../../../modules/game/view-hooks/use-compass-view";
import { GEO_MODULE_ERROR } from "../../../../modules/geo";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";
import GameErrorPage from "../../error";
import AccessError from "../access-error";
import AccuracyError from "../accuracy-error";
import MultiPointCompassViewContent from "./content";
import GeoPointDrawer from "./geo-point-drawer";
import useMultiGeoViewData from "./use-multi-geo-view-data";

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
        height: 2em;
        position: relative;
    }

    @media (orientation: landscape) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr 2em;

        .map-wrapper {
            grid-column: 1;
            grid-row: 1 / span 3;
        }
    }

    @media (orientation: portrait) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto 2em;

        .map-wrapper {
            grid-column: 1;
            grid-row: 1
        }

        .inside-header {
            display: none;
        }
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

    const { hasPosition, isAccuracyOk, error } = useCompassView(noCompletedPoints);
    const showPermitionError = error?.type === GEO_MODULE_ERROR.PERMISSION_DENIED;

    const showMap = hasPosition && isAccuracyOk;
    const showAccuracyError = !isAccuracyOk && !error;

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

    return <>
        <ScrollToTop trigger={step?.id} behavior="smooth" />
        <FillScreenWithHeader hideHeader={true}>
            <div className="hide-in-landscape">
                <PageHeader />
            </div>

            {showPermitionError && <AccessError />}
            {showAccuracyError && <AccuracyError />}

            {showMap && <MapScreenContainer>
                {step && <>
                    <div className="inside-header">
                        <div className="hide-in-portrait">
                            <SmallPageHeader />
                        </div>
                    </div>
                    <div className="map-wrapper">
                        <MultiPointCompassViewContent activePoint={selectedStep?.id} geoSteps={noCompletedPoints} onPointClicked={onPointClicked} />
                    </div>
                    <div className="button-list">
                        <button className="button" onClick={() => { setShowHelp(true) }}>Pomoc<i className="icon help" /></button>
                    </div>
                    <div className="drawer">
                        <GeoPointDrawer step={selectedStep} isOpen={openDrawer} onToggleClicked={() => reducer({ type: 'toggleDrawer' })} />
                    </div>
                </>}
                {!step && <GameErrorPage />}
            </MapScreenContainer>}
        </FillScreenWithHeader>
        {
            showHelp && <TaskPopup onClick={() => { setShowHelp(false) }}>
                <p>
                    Kliknij w pinezkę na mapie aby sprawdzić odległość dzielącą Cię w prostej linii od wybranej lokalizacji. Możesz dowolnie zmieniać wybór. Po dojściu do lokalizacji, automatycznie wczyta się związany z nią ekran gry.
                </p>
            </TaskPopup>
        }
        {showDebug && <CompassDebugTools />}
    </>
}


