import { lazy, Suspense, useCallback } from "react";
import { useMemo } from "react";
import Loader from "../../../components/elements/loader";
import Box from "../../../components/layout/box";
import useFinishGameStep from "../../../modules/game/hooks/use-finish-game-step";
import usePageStep from "../../../modules/game/hooks/use-page-step";

const Page1 = lazy(() => import('./page-1'));
const PageEnd = lazy(() => import('./page-end'));
const Page3 = lazy(() => import('./page-3'));

type Props = {
    id: string
}

export default function PageView({ id }: Props) {

    const finishStep = useFinishGameStep();

    const onNext = useCallback(() => {
        finishStep(id);
    }, [finishStep, id]);

    const page = usePageStep(id);

    const widget = useMemo(() => {

        switch (page?.pageId) {
            case 'page-1':
                return <Page1 onNext={onNext} />
            case 'end':
                return <PageEnd onNext={onNext} />
            default:
                return <PagePlaceholder onNext={onNext} />
        }
    }, [page, onNext]);

    return <>
        <Suspense fallback={<Loader />}>
            {widget}
        </Suspense>
    </>
}


function PagePlaceholder({ onNext }: { onNext: () => void }) {
    return <Box>
        <h2>Tu będzie jakaś strona</h2>
        <button onClick={onNext}>Dalej</button>
    </Box>
}
