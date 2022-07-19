import { useRef, useEffect } from "react";
import React from "react";

type Props = {
    trigger?: any,
    behavior?: ScrollBehavior
}

const ScrollToMe: React.FunctionComponent<Props> = ({ trigger, behavior }) => {
    const me = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (me.current) {

            if (typeof trigger === 'undefined' || Boolean(trigger)) {

                const target = me.current.getBoundingClientRect().top + window.scrollY;

                const id = setTimeout(() => {
                    window.scrollTo({
                        top: target,
                        behavior: behavior || 'auto'
                    });
                });

                return () => {
                    clearTimeout(id);
                }
            }
        }
    }, [me, trigger, behavior])

    return <div ref={me} style={{ height: 0, width: 0 }}></div>;
}

export default ScrollToMe;
