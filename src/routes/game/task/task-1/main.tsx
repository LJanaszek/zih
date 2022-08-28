import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header";
import Zad1Photo from "../../../../components/task-widgets/street-photo/photo"
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header"
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";

type Props = {
    onComplete(): void
}

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    return <>
        <FillScreenWithHeader hideHeader={true}>
            <ScrollToTop />
            <Zad1Photo onComplete={onComplete} />
        </FillScreenWithHeader>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Zrobione!<i className="icon ok" /></button>
        </div>
    </>
}
