import { GeoModuleState, GeoModuleAction, GEO_MODULE_ACTION } from "./provider";

export default function UserReducer(state: GeoModuleState, action: GeoModuleAction): GeoModuleState {
    const { type, payload } = action;
    switch (type) {
        case GEO_MODULE_ACTION.SET_DATA:
            return {
                ...state,
                ...payload
            }

        case GEO_MODULE_ACTION.SET_ERROR:
            return {
                ...state,
                error: payload.error
            }
    }

    return state;
}
