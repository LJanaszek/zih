import { useEffect } from "react";
import { MAIN_MODULE_ACTION, useMainModuleDispatch } from "..";

export default function useRemoveHeader() {

    const dispatch = useMainModuleDispatch();

    useEffect(() => {
        dispatch({
            type: MAIN_MODULE_ACTION.SET_HEADER,
            payload: {
                show: false
            }
        })

        return (() => {
            dispatch({
                type: MAIN_MODULE_ACTION.SET_HEADER,
                payload: {
                    show: true
                }
            })
        })
    }, [dispatch])
}
