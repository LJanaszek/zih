import { lazy, Suspense, useCallback } from "react";
import { useMemo } from "react";
import Loader from "../../../components/elements/loader";
import Box from "../../../components/layout/box";
import useFinishGameStep from "../../../modules/game/hooks/use-finish-game-step";
import useTaskStep from "../../../modules/game/hooks/use-task-step";

const Zad1Widget = lazy(() => import('./task-1'))
const Zad2Widget = lazy(() => import('./task-2'))
const Zad3Widget = lazy(() => import('./task-3'))
const Zad4Widget = lazy(() => import('./task-4'))
const Zad5Widget = lazy(() => import('./task-5'))
const Zad6Widget = lazy(() => import('./task-6'))
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
            case 'task-1':
                return <Zad1Widget onComplete={onComplete} />
            case 'task-2':
                return <Zad2Widget onComplete={onComplete} />
            case 'task-3':
                return <Zad3Widget onComplete={onComplete} />
            case 'task-4':
                return <Zad4Widget onComplete={onComplete} />
            case 'task-5':
                return <Zad5Widget onComplete={onComplete} />
            case 'task-6':
                return <Zad6Widget onComplete={onComplete} />
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
