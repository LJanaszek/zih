import { ConfigModuleState, ConfigModuleAction, CONFIG_MODULE_ACTION } from ".";

export default function configReducer(state: ConfigModuleState, action: ConfigModuleAction): ConfigModuleState {
    const { type, payload } = action;
    switch (type) {

        case CONFIG_MODULE_ACTION.SET_DEBUG:
            return {
                ...state,
                showDebug: payload
            }
    }

    return state;
}
