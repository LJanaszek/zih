import React from "react";
import createStore from "../../utils/store";
import useGeo from "./hooks/use-geo";
import ListenersComponent from "./listeners-component";
import reducer from "./reducer";
import { GEO_MODULE_ERROR } from "./types";



export type GeoModuleState = {
    position?: {
        lat: number,
        lng: number
    },
    accuracy?: number,
    error: {
        type: GEO_MODULE_ERROR,
        originalError?: any
    } | null
}

const initGeoModuleState = {
    error: null
}

export enum GEO_MODULE_ACTION {
    SET_DATA,
    SET_ERROR
}

export type GeoModuleAction = {
    type: GEO_MODULE_ACTION,
    payload?: any
}

const [
    GeoModuleProvider,
    useGeoModuleDispatch,
    useGeoModuleState
] = createStore(reducer, initGeoModuleState)

type Props = {
    maximumAge?: number,
    enableHighAccuracy?: boolean,
    timeout?: number
}

const Provider: React.FC<React.PropsWithChildren<Props>> = ({ children, maximumAge, enableHighAccuracy, timeout }) => {
    return <GeoModuleProvider>
        <ListenersComponent maximumAge={maximumAge} enableHighAccuracy={enableHighAccuracy} timeout={timeout} >
            {children}
        </ListenersComponent>
    </GeoModuleProvider>
}


export {
    Provider as GeoModuleProvider,
    useGeo,
    useGeoModuleDispatch,
    useGeoModuleState,
    GEO_MODULE_ERROR
}
