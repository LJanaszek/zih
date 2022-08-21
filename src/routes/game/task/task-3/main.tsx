import { useCallback, useState } from "react";
import TaskPopup from "../../../../components/elements/task-popup";
import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header";
import TreeTask from "../../../../components/task-widgets/tree";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header"
import ScrollToMe from "../../../../utils/widgets/scroll-to-me";

type Props = {
    onComplete(): void
}

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    const [showNextButton, setShowNextButton] = useState(false);
    const [showHelpPopup, setShowHelpPopup] = useState(false);

    const onTaskComplete = useCallback(() => {
        setShowNextButton(true);
    }, [setShowNextButton])

    return <>
        <FillScreenWithHeader>
            <TreeTask onComplete={onTaskComplete} />
        </FillScreenWithHeader>
        {showHelpPopup && <TaskPopup onClick={() => { setShowHelpPopup(false) }}>
            <p>Dopasuj nazwy dyżurów do odpowiednich gałęzi.</p>
        </TaskPopup>}
        <button className="button" onClick={() => { setShowHelpPopup(true) }}>Pomoc<i className="icon help" /></button>
        <ScrollToMe trigger={showNextButton} behavior={'smooth'} />
        {showNextButton && <button className="button" onClick={onComplete}>Zakończ<i className="icon ok" /></button>}
    </>
}
