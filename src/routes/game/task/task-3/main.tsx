import { useCallback, useState } from "react";
import styled from "styled-components";
import TaskPopup from "../../../../components/elements/task-popup";
import TreeTask from "../../../../components/task-widgets/tree";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header"
import ScrollToMe from "../../../../utils/widgets/scroll-to-me";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";

type Props = {
    onComplete(): void
}

const Container = styled.div`

    height: 100vh;

    .app-ratio-keeper {
        position: relative;
        @media(orientation: portrait) {
            padding-top : ${100 * 900 / 590}%;
        }

        @media(orientation: landscape) {
            padding-top: ${100 * 1180 / 682}%;
            width: 100%;
        }
    }
`;

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    const [showNextButton, setShowNextButton] = useState(false);
    const [showHelpPopup, setShowHelpPopup] = useState(false);

    const onTaskComplete = useCallback(() => {
        setShowNextButton(true);
    }, [setShowNextButton])

    return <>
        <ScrollToTop />
        <Container>
            <TreeTask onComplete={onTaskComplete} />
        </Container>
        {showHelpPopup && <TaskPopup onClick={() => { setShowHelpPopup(false) }}>
            <p>Dopasuj nazwy dyżurów do odpowiednich gałęzi.</p>
        </TaskPopup>}
        <ScrollToMe trigger={showNextButton} behavior={'smooth'} />
        <div className="button-list">
            <button className="button" onClick={() => { setShowHelpPopup(true) }}>Pomoc<i className="icon help" /></button>
            {showNextButton && <button className="button" onClick={onComplete}>Zakończ<i className="icon ok" /></button>}
        </div>
    </>
}
