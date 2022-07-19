import { MainModuleState, MainModuleAction, MAIN_MODULE_ACTION } from ".";

export default function UserReducer(state: MainModuleState, action: MainModuleAction): MainModuleState {
    const { type, payload } = action;
    switch (type) {
        case MAIN_MODULE_ACTION.SET_HEADER:
            return {
                ...state,
                showHeader: payload.show
            }

        case MAIN_MODULE_ACTION.SET_FOOTER:
            return {
                ...state,
                showFooter: payload.show
            }
    }

    return state;
}
