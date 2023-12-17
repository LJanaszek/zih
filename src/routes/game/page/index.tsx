import { lazy, Suspense, useCallback } from "react";
import { useMemo } from "react";
import Loader from "../../../components/elements/loader";
import Box from "../../../components/layout/box";
import useFinishGameStep from "../../../modules/game/hooks/use-finish-game-step";
import usePageStep from "../../../modules/game/hooks/use-page-step";

const Page1 = lazy(() => import('./page-1'));
const Page2 = lazy(() => import('./page-2'));
const Page3 = lazy(() => import('./page-3'));
const Page4 = lazy(() => import('./page-4'));
const Page5 = lazy(() => import('./page-5'));
const Page6 = lazy(() => import('./page-6'));
const Page7 = lazy(() => import('./page-7'));
const Page8 = lazy(() => import('./page-8'));
const Page9 = lazy(() => import('./page-9'));
const Page10 = lazy(() => import('./page-10'));
const Page11 = lazy(() => import('./page-11'));
const Page12 = lazy(() => import('./page-12'));
const Page13 = lazy(() => import('./page-13'));
const Page14 = lazy(() => import('./page-14'));
const Page15 = lazy(() => import('./page-15'));
const PageEnd = lazy(() => import('./page-end'));

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
            case 'page-2':
                return <Page2 onNext={onNext} />
            case 'page-3':
                return <Page3 onNext={onNext} />
            case 'page-4':
                return <Page4 onNext={onNext} />
            case 'page-5':
                return <Page5 onNext={onNext} />
            case 'page-6':
                return <Page6 onNext={onNext} />
            case 'page-7':
                return <Page7 onNext={onNext} />
            case 'page-8':
                return <Page8 onNext={onNext} />
            case 'page-9':
                return <Page9 onNext={onNext} />
            case 'page-10':
                return <Page10 onNext={onNext} />
            case 'page-11':
                return <Page11 onNext={onNext} />
            case 'page-12':
                return <Page12 onNext={onNext} />
            case 'page-13':
                return <Page13 onNext={onNext} />
            case 'page-14':
                return <Page14 onNext={onNext} />
            case 'page-15':
                return <Page15 onNext={onNext} />
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
