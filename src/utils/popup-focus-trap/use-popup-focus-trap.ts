import { useRef, useCallback, useEffect, RefObject } from "react";

export default function usePopupFocusTrap<FType extends HTMLElement, LType extends HTMLElement> (props?: { first?: RefObject<FType>, last?: RefObject<LType> }): {
    firstItemRef: RefObject<FType>,
    lastItemRef: RefObject<LType>
} {
    const localFirstRef = useRef<FType>(null)
    const localLAstRef = useRef<LType>(null)

    const firstItemRef = props?.first || localFirstRef;
    const lastItemRef = props?.last || localLAstRef;

    const firstFocusListHandler = useCallback((e: KeyboardEvent) => {
        if (lastItemRef.current && e.key === 'Tab' && e.shiftKey === true) {
            e.preventDefault();
            lastItemRef.current.focus();
        }
    }, [lastItemRef]);

    const lastFocusListHandler = useCallback((e: KeyboardEvent) => {
        if (firstItemRef.current && e.key === 'Tab' && e.shiftKey === false) {
            e.preventDefault();
            firstItemRef.current.focus();
        }
    }, [firstItemRef]);

    useEffect(() => {

        const cancelButton = lastItemRef.current
        const input = firstItemRef.current

        if (cancelButton && input) {
            input.focus();
            cancelButton.addEventListener('keydown', lastFocusListHandler)
            input.addEventListener('keydown', firstFocusListHandler)
        }

        return () => {
            cancelButton?.removeEventListener('keydown', lastFocusListHandler)
            input?.removeEventListener('keydown', firstFocusListHandler)
        }
    }, [firstFocusListHandler, lastFocusListHandler]);

    return {
        firstItemRef,
        lastItemRef
    }
}
