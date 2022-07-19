import React from "react";
import { useCallback, useEffect } from "react";
import { useGeoModuleDispatch, GEO_MODULE_ACTION } from "./provider";
import { GEO_MODULE_ERROR } from "./types";

type Props = {
    maximumAge?: number,
    enableHighAccuracy?: boolean,
    timeout?: number
}

const ListenersComponent: React.FC<React.PropsWithChildren<Props>> = (props) => {

    const {children, maximumAge = 500, enableHighAccuracy = true, timeout = Infinity} = props;

    const dispatch = useGeoModuleDispatch();

    const positionHandler: PositionCallback = useCallback((position) => {
        dispatch({
            type: GEO_MODULE_ACTION.SET_DATA,
            payload: {
                position: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                accuracy: position.coords.accuracy
            }
        })
    }, [dispatch])

    const errorHandler = useCallback((error: GeolocationPositionError) => {

        if (typeof GeolocationPositionError === 'undefined') {
            //@ts-ignore
            GeolocationPositionError = PositionError;
        }

        switch (error?.code) {
            case GeolocationPositionError.PERMISSION_DENIED:
                dispatch({
                    type: GEO_MODULE_ACTION.SET_ERROR,
                    payload: {
                        error: {
                            type: GEO_MODULE_ERROR.PERMISSION_DENIED,
                            originalError: error
                        }
                    }
                });
                break;

            case GeolocationPositionError.POSITION_UNAVAILABLE:
                dispatch({
                    type: GEO_MODULE_ACTION.SET_ERROR,
                    payload: {
                        error: {
                            type: GEO_MODULE_ERROR.POSITION_UNAVAILABLE,
                            originalError: error
                        }
                    }
                });
                break;

            case GeolocationPositionError.TIMEOUT:
                dispatch({
                    type: GEO_MODULE_ACTION.SET_ERROR,
                    payload: {
                        error: {
                            type: GEO_MODULE_ERROR.TIMEOUT,
                            originalError: error
                        }
                    }
                });
                break;

            default:
                dispatch({
                    type: GEO_MODULE_ACTION.SET_ERROR,
                    payload: {
                        error: {
                            type: GEO_MODULE_ERROR.UNKNOWN,
                            originalError: error
                        }
                    }
                });

        }
    }, [dispatch])

    useEffect(() => {
        if ('geolocation' in navigator) {
            const id = navigator.geolocation.watchPosition(positionHandler, errorHandler, {
                maximumAge,
                enableHighAccuracy,
                timeout
            });

            navigator.geolocation.getCurrentPosition(positionHandler, errorHandler, {
                maximumAge,
                enableHighAccuracy,
                timeout
            });

            return () => {
                navigator.geolocation.clearWatch(id);
            }

        } else {
            dispatch({
                type: GEO_MODULE_ACTION.SET_ERROR,
                payload: {
                    error: {
                        type: GEO_MODULE_ERROR.NO_GEOLOCATION_API
                    }
                }
            })
        }
    }, [dispatch, errorHandler, positionHandler, maximumAge, enableHighAccuracy, timeout])

    return <>{children}</>;
}

export default ListenersComponent;
