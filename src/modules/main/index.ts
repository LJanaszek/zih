import createStore from "../../utils/store";
import reducer from "./reducer";

export type MainModuleState = {
    showHeader: boolean;
    showFooter: boolean;
}

const initMainModuleState = {
    showHeader: true,
    showFooter: true
}

export enum MAIN_MODULE_ACTION {
    SET_HEADER,
    SET_FOOTER
}

export type MainModuleAction = {
    type: MAIN_MODULE_ACTION,
    payload?: any
}

const [
    MainModuleProvider,
    useMainModuleDispatch,
    useMainModuleState
] = createStore(reducer, initMainModuleState)


export {
    MainModuleProvider,
    useMainModuleDispatch,
    useMainModuleState
}
