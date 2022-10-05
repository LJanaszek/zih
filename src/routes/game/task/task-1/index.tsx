import { useState } from "react";
import TaskIntro from "./intro";
import TaskMain from "./main";
import TaskOutro from "./outro";
import TaskPlot from "./plot";

type Props = {
    onComplete(): void
}

enum PHASE {
    INTRO,
    TASK,
    OUTRO,
    PLOT
}

export default function Zad5Widget({ onComplete }: Props) {
    const [phase, setPhase] = useState<PHASE>(PHASE.INTRO);

    return <>
        {phase === PHASE.INTRO && <TaskIntro onComplete={() => { setPhase(PHASE.TASK) }} />}
        {phase === PHASE.TASK && <TaskMain onComplete={() => { setPhase(PHASE.OUTRO) }} />}
        {phase === PHASE.OUTRO && <TaskOutro onComplete={() => {setPhase(PHASE.PLOT)}} onRestart={() => { setPhase(PHASE.TASK) }} />}
        {phase === PHASE.PLOT && <TaskPlot onComplete={onComplete} />}
    </>
}
