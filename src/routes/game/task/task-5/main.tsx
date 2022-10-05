import { useState } from "react";
import styled from "styled-components";
import TaskPopup from "../../../../components/elements/task-popup";
import Zad5Scene from "../../../../components/task-widgets/travelers/scene"
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";

type Props = {
    onComplete(): void
}

const Container = styled.div`
    .button-list {
        flex-direction: column;
    }
`;


export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    const [showHelpPopup, setShowHelpPopup] = useState(false);

    return <Container>
        <ScrollToTop />
        <Zad5Scene onComplete={onComplete} />
        <div className="button-list">
            <button className="button" onClick={() => { setShowHelpPopup(true) }}>Pomoc<i className="icon help" /></button>
            <button className="button" onClick={onComplete}>Zrobione!<i className="icon ok" /></button>
        </div>
        {showHelpPopup && <TaskPopup onClick={() => { setShowHelpPopup(false) }}>
            <p>Kliknijcie guzik start i rozglądając się wokół, spróbujcie znaleźć wszystkich podróżnych czekających na pociąg. Kliknijcie w nich by wsiedli do pociągu.</p>
        </TaskPopup>}
    </Container>
}
