import React, { useEffect } from "react";

type Props = {
    trigger?: any,
    behavior?: ScrollBehavior
}

const ScrollToTop: React.FunctionComponent<Props> = ({ trigger, behavior }) => {

    useEffect(() => {

        if (typeof trigger === 'undefined' || Boolean(trigger)) {
            window.scrollTo({
                top: 0,
                behavior: behavior || 'auto'
            });
        }
    }, [behavior, trigger]);

    return (<></>)
}

export default ScrollToTop;
