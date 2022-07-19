import { useEffect, useMemo } from "react";
import CONFIG from "../../../config";
import { useGameModuleState } from "..";
import useFinishGameStep from "../hooks/use-finish-game-step";
import { GeoStep } from "../types";
import { GEO_MODULE_ERROR, useGeo } from "../../geo";
import getDistance from "../../geo/utils/get-distance";
import { bearing as getBearing } from "../../geo/utils/get-point";

export type GeoStepWithData = {
    point: GeoStep,
    distance: number,
    bearing: number,
    isInRange: boolean
}

export type CompassViewData = {
    hasPosition: boolean,
    isAccuracyOk: boolean,
    error: {
        type: GEO_MODULE_ERROR,
        originalError?: any
    } | null,
    points: GeoStepWithData[],
    closestPoint: GeoStepWithData
}

/**
 * Zwraca dane porzebne do generacji widoku kompasu
 * @params steps - Lista aktualnie śledzonych kroków geo
 *
 * @returns {Object} compassView
 *   {boolean} compassView.hasPosition - czy mamy pomiar pozycji gracza
 *   {boolean} compassView.isAccuracyOk
 *
 */
export default function useCompassView(steps: GeoStep[]) : CompassViewData {
    const { position, accuracy, error, hasPosition } = useGeo();
    const activePoints = steps;
    const {ignoreAccuracy} = useGameModuleState();
    const finishStep = useFinishGameStep();

    const activePointsWithData = useMemo(() => activePoints.map(point => {
        const distance = (() => {
            if (!position || !point) return Infinity;

            return getDistance(position, point.position) * 1000;
        })();

        const isInRange = (() => {
            return distance !== null && distance < CONFIG.GEO_POINT_DISTANCE;
        })();

        const bearing = (() => {
            if (position && point) {
                return getBearing(position, point.position);
            }

            return 0;
        })()

        return {
            point,
            distance,
            isInRange,
            bearing
        }
    }), [position, activePoints]);

    const isAccuracyOk = useMemo(() => {
        return ignoreAccuracy || (accuracy || Infinity) <= CONFIG.MIN_GEO_ACCURACY;
    }, [accuracy, ignoreAccuracy]);

    activePointsWithData.sort((a,b) => {
        return a.distance - b.distance;
    });

    useEffect(() => {
        if (!isAccuracyOk) return;

        const pointInRange = activePointsWithData.reduce<string | null>((result, point) => {
            if (result) return result

            if (point.isInRange) {
                return point.point.id;
            }

            return null;
        }, null);

        if (pointInRange) {
            const id = window.setTimeout(() => {
                finishStep(pointInRange);
            }, 1000);

            return () => {
                window.clearTimeout(id);
            }
        }
    }, [activePointsWithData, finishStep, isAccuracyOk]);

    return {
        hasPosition,
        isAccuracyOk,
        error,
        points: activePointsWithData,
        closestPoint: activePointsWithData[0]
    }
}
