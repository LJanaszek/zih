import {Suspense, useCallback } from "react";
import { useMemo } from "react";
import Loader from "../../../components/elements/loader";
import Box from "../../../components/layout/box";
import useFinishGameStep from "../../../modules/game/hooks/use-finish-game-step";
import useTaskStep from "../../../modules/game/hooks/use-task-step";


type Props = {
    id: string
}

export default function WidgetView({ id }: Props) {

    const finishStep = useFinishGameStep();

    const onComplete = useCallback(() => {
        finishStep(id);
    }, [finishStep, id])

    const step = useTaskStep(id);
    const widget = useMemo(() => {
        switch (step?.taskId) {
            default:
                return <WidgetPlaceholder onComplete={onComplete} />
        }
    }, [step, onComplete]);

    return <>
        <Suspense fallback={<Loader />}>
            {widget}
        </Suspense>
    </>
}


function WidgetPlaceholder({ onComplete }: { onComplete: () => void }) {
    return <Box>
        <h2>Tu będzie jakieś zadanie</h2>
        <button onClick={onComplete}>ZROBIONE!</button>
    </Box>
}
