import createStore from "../../utils/store";
import reducer from "./reducer";

export type ConfigModuleState = {
    showDebug: boolean;
}

const initConfigModuleState = {
    showDebug: false,
}

export enum CONFIG_MODULE_ACTION {
    SET_DEBUG
}

export type ConfigModuleAction = {
    type: CONFIG_MODULE_ACTION,
    payload?: any
}

const [
    ConfigModuleProvider,
    useConfigModuleDispatch,
    useConfigModuleState
] = createStore(reducer, initConfigModuleState, 'rh:config')


export {
    ConfigModuleProvider,
    useConfigModuleDispatch,
    useConfigModuleState
}
