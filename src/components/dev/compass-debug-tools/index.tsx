import { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { GAME_MODULE_ACTION, useGameModuleDispatch, useGameModuleState } from "../../../modules/game";
import useGameStep from "../../../modules/game/hooks/use-game-step";
import useGeoStep from "../../../modules/game/hooks/use-geo-step";
import { GAME_STEP_TYPE } from "../../../modules/game/types";
import { useGeo } from "../../../modules/geo";
import DebugMap from "../debug-map";

const Container = styled.div`
    padding: .5em;
    border: 1px solid black;
    background: #d9d9d9;
`;

export default function CompassDebugTools() {
    const step = useGameStep();
    const { position } = useGeo();

    const dispatch = useGameModuleDispatch()
    const { ignoreAccuracy, } = useGameModuleState();

    const { watch, register } = useForm();

    const newIgnoreAccuracy = watch('ignoreAccuracy', ignoreAccuracy);
    const debugPointsDistance = watch('debugPointsDistance', ignoreAccuracy);

    useEffect(() => {
        dispatch({
            type: GAME_MODULE_ACTION.SET_IGNORE_ACCURACY,
            payload: {
                ignoreAccuracy: newIgnoreAccuracy
            }
        })
    }, [newIgnoreAccuracy, dispatch])

    const geoPoints = useMemo(() => {
        if (step?.type === GAME_STEP_TYPE.GEO_STEP) {
            return [step.id]
        }

        if (step?.type === GAME_STEP_TYPE.MULTI_GEO_STEP) {
            return step.stepsId;

        }

        return [];
    }, [step]);

    const [showMap, setShowMap] = useState(false);

    return <Container>
        <h3>Compass Dev Tools</h3>
        <div>
            {geoPoints.map((id) => {
                return <div key={id}><GoToPointButton pointId={id} /></div>
            })}
        </div>
        <div>
            <button onClick={() => setShowMap(true)}>Pokaż mapę</button>
            {showMap && <DebugMap onClose={() => setShowMap(false)} />}
        </div>
        <div>
            <label>
                <input type="checkbox" defaultChecked={ignoreAccuracy} {...register('ignoreAccuracy')} /> Ignoruj wymóg dokładności GPS
            </label>
        </div>
        <div>
            Rozstaw punkty testowe: <button onClick={() => {
                dispatch({
                    type: GAME_MODULE_ACTION.PLACE_DEBUG_POINTS,
                    payload: {
                        position,
                        distance: debugPointsDistance / 1000
                    }
                })
            }}>Rozstaw punkty</button> w promieniu <input type="number" {...register('debugPointsDistance', { valueAsNumber: true })} />
        </div>
    </Container>
}



function GoToPointButton({ pointId }: { pointId: string }) {

    const dispatch = useGameModuleDispatch()
    const { position } = useGeo();
    const point = useGeoStep(pointId);

    const onGoToPoint = useCallback(() => {
        if (point && position) {
            dispatch({
                type: GAME_MODULE_ACTION.SET_POINT_POSITION,
                payload: {
                    position,
                    ids: [point.id]
                }
            })
        }
    }, [dispatch, position, point]);

    return <>
        {position && <button onClick={onGoToPoint}>Dojdź do punktu: {pointId} {point?.name}</button>}
        {!position && <p>Brak pozycji GPS</p>}
    </>
}
