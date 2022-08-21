import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import styled from "styled-components";
import CompassDebugTools from "../../../../components/dev/compass-debug-tools";
import Popup from "../../../../components/elements/popup";
import Box from "../../../../components/layout/box";
import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header";
import { useConfigModuleState } from "../../../../modules/config";
import { GeoStep, MultiGeoStep } from "../../../../modules/game/types";
import useCompassView from "../../../../modules/game/view-hooks/use-compass-view";
import { GeoModuleProvider, GEO_MODULE_ERROR } from "../../../../modules/geo";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import ScrollToMe from "../../../../utils/widgets/scroll-to-me";
import GameErrorPage from "../../error";
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
        height: 5em;
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
        <FillScreenWithHeader>
            <ScrollToMe trigger={step?.id} behavior="smooth" />

            {showPermitionError && <Box>
                <h3>Błąd uprawnień.</h3>
                <p>Gra nie uzyskała dostępu do lokalizacji urządzenia. <br />Przyznaj uprawnienia stronie z grą, a następnie odśwież stronę.</p>
            </Box>}

            {showAccuracyError && <AccuracyError />}

            {showMap && <MapScreenContainer>
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
            </MapScreenContainer>}
        </FillScreenWithHeader>
        {
            showHelp && <Popup onClick={() => { setShowHelp(false) }}>
                <p>
                    Kliknij w pinezkę na mapie aby sprawdzić odległość dzielącą Cię w prostej linii od wybranej lokalizacji. Możesz dowolnie zmieniać wybór. Po dojściu do lokalizacji, automatycznie wczyta się związany z nią ekran gry.
                </p>
            </Popup>
        }
        {showDebug && <CompassDebugTools />}
    </>
}


