import { useEffect } from "react";
import { MAIN_MODULE_ACTION, useMainModuleDispatch } from "..";

export default function useRemoveFooter() {

    const dispatch = useMainModuleDispatch();

    useEffect(() => {
        dispatch({
            type: MAIN_MODULE_ACTION.SET_FOOTER,
            payload: {
                show: false
            }
        })

        return (() => {
            dispatch({
                type: MAIN_MODULE_ACTION.SET_FOOTER,
                payload: {
                    show: true
                }
            })
        })
    }, [dispatch])
}
