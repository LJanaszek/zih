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
const PAGE12_1 = lazy(() => import('./page-12-1'));
const PAGE12_2 = lazy(() => import('./page-12-2'));
const Page13 = lazy(() => import('./page-13'));
const Page14 = lazy(() => import('./page-14'));
const Page15 = lazy(() => import('./page-15'));

const Page16 = lazy(() => import('./page-16'));
const Page17 = lazy(() => import('./page-17'));
const Page18 = lazy(() => import('./page-18'));
const Page19 = lazy(() => import('./page-19'));
const Page20 = lazy(() => import('./page-20'));
const Page21 = lazy(() => import('./page-21'));
const Page22 = lazy(() => import('./page-22'));
const Page23 = lazy(() => import('./page-23'));
const Page24 = lazy(() => import('./page-24'));
const Page25 = lazy(() => import('./page-25'));
const Page26 = lazy(() => import('./page-26'));
const Page27 = lazy(() => import('./page-27'));
const Page28 = lazy(() => import('./page-28'));
const Page29 = lazy(() => import('./page-29'));
const Page30 = lazy(() => import('./page-30'));
const Page31 = lazy(() => import('./page-31'));
const Page32 = lazy(() => import('./page-32'));
const Page33 = lazy(() => import('./page-33'));
const Page34 = lazy(() => import('./page-34'));
const Page35 = lazy(() => import('./page-35'));
const Page36 = lazy(() => import('./page-36'));
const Page37 = lazy(() => import('./page-37'));
const Page38 = lazy(() => import('./page-38'));
const Page39 = lazy(() => import('./page-39'));
const Page40 = lazy(() => import('./page-40'));

const Page41 = lazy(() => import('./page-41'));
const Page42 = lazy(() => import('./page-42'));
const Page43 = lazy(() => import('./page-43'));
const Page44 = lazy(() => import('./page-44'));
const Page45 = lazy(() => import('./page-45'));
const Page46 = lazy(() => import('./page-46'));
const Page47 = lazy(() => import('./page-47'));
const Page48 = lazy(() => import('./page-48'));
const Page49 = lazy(() => import('./page-49'));
const Page50 = lazy(() => import('./page-50'));
const Page51 = lazy(() => import('./page-51'));
const Page52 = lazy(() => import('./page-52'));
const PAGE52_1 = lazy(() => import('./page-52-1'));
const Page53 = lazy(() => import('./page-53'));
const Page54 = lazy(() => import('./page-54'));
const Page55 = lazy(() => import('./page-55'));
const Page56 = lazy(() => import('./page-56'));
const Page57 = lazy(() => import('./page-57'));
const Page58 = lazy(() => import('./page-58'));
const Page59 = lazy(() => import('./page-59'));
const Page60 = lazy(() => import('./page-60'));

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
            case 'page-12-1':
                return <PAGE12_1 onNext={onNext} />
            case 'page-12-2':
                return <PAGE12_2 onNext={onNext} />
            case 'page-13':
                return <Page13 onNext={onNext} />
            case 'page-14':
                return <Page14 onNext={onNext} />
            case 'page-15':
                return <Page15 onNext={onNext} />
            case 'page-16':
                return <Page16 onNext={onNext} />


            case 'page-17':
                return <Page17 onNext={onNext} />
            case 'page-18':
                return <Page18 onNext={onNext} />
            case 'page-19':
                return <Page19 onNext={onNext} />
            case 'page-20':
                return <Page20 onNext={onNext} />
            case 'page-21':
                return <Page21 onNext={onNext} />
            case 'page-22':
                return <Page22 onNext={onNext} />
            case 'page-23':
                return <Page23 onNext={onNext} />
            case 'page-24':
                return <Page24 onNext={onNext} />
            case 'page-25':
                return <Page25 onNext={onNext} />
            case 'page-26':
                return <Page26 onNext={onNext} />
            case 'page-27':
                return <Page27 onNext={onNext} />
            case 'page-28':
                return <Page28 onNext={onNext} />
            case 'page-29':
                return <Page29 onNext={onNext} />
            case 'page-30':
                return <Page30 onNext={onNext} />
            case 'page-31':
                return <Page31 onNext={onNext} />
            case 'page-32':
                return <Page32 onNext={onNext} />

            case 'page-33':
                return <Page33 onNext={onNext} />
            case 'page-34':
                return <Page34 onNext={onNext} />
            case 'page-35':
                return <Page35 onNext={onNext} />
            case 'page-36':
                return <Page36 onNext={onNext} />
            case 'page-37':
                return <Page37 onNext={onNext} />
            case 'page-38':
                return <Page38 onNext={onNext} />
            case 'page-39':
                return <Page39 onNext={onNext} />
            case 'page-40':
                return <Page40 onNext={onNext} />

            case 'page-41':
                return <Page41 onNext={onNext} />
            case 'page-42':
                return <Page42 onNext={onNext} />
            case 'page-43':
                return <Page43 onNext={onNext} />
            case 'page-44':
                return <Page44 onNext={onNext} />
            case 'page-45':
                return <Page45 onNext={onNext} />
            case 'page-46':
                return <Page46 onNext={onNext} />
            case 'page-47':
                return <Page47 onNext={onNext} />
            case 'page-48':
                return <Page48 onNext={onNext} />
            case 'page-49':
                return <Page49 onNext={onNext} />
            case 'page-50':
                return <Page50 onNext={onNext} />

            case 'page-51':
                return <Page51 onNext={onNext} />
            case 'page-52':
                return <Page52 onNext={onNext} />
            case 'page-52-1':
                return <PAGE52_1 onNext={onNext} />
            case 'page-53':
                return <Page53 onNext={onNext} />
            case 'page-54':
                return <Page54 onNext={onNext} />

            case 'page-55':
                return <Page55 onNext={onNext} />
            case 'page-56':
                return <Page56 onNext={onNext} />
            case 'page-57':
                return <Page57 onNext={onNext} />
            case 'page-58':
                return <Page58 onNext={onNext} />
            case 'page-59':
                return <Page59 onNext={onNext} />
            case 'page-60':
                return <Page60 onNext={onNext} />

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
