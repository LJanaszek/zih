import { useMemo, useState } from "react";
import Taskimg from "../img/taskImages/task1.jpg";
import TaskPopup from "../../../../components/elements/task-popup";
import TaskIntroTemplate from "../../../../components/layout/task-intro";

type Props = {
    onComplete(): void
}

export default function TaskIntro({ onComplete }: Props) {

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const addButtons = useMemo(() => {
        return [
            <button className="button" onClick={() => { setShowGPSInfo(true) }}>Pomoc <i className="icon help" /></button>
        ]
    }, [setShowGPSInfo])

    return <>
        <TaskIntroTemplate
            onComplete={onComplete}
            image={Taskimg}
            title={`"ul.Krokodyli" - Walcownicza daw. Handlowa`}
            addButtons={addButtons}
        >
            <h2>Spójrz na dawną ulicę Handlową</h2>
            <p>Wykonajcie sobie zdjęcie na tle ulicy Handlowej. Wyobraźcie sobie jakich dźwięków i zapachów można było tam doświadczyć. Co można było tam kupić?</p>
        </TaskIntroTemplate>
        {showGPSInfo && <TaskPopup onClick={() => { setShowGPSInfo(false) }}>
            <p>
                Gra wykorzystuje technologię rozszerzonej rzeczywistości. <br /><br />
                Jeśli chcesz wykonać to zadanie, prosimy, wyraź zgodę na dostęp do kamery.
            </p>
        </TaskPopup>}
    </>
}
