import Zad5Scene from "../../../../components/task-widgets/travelers/scene"
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";

type Props = {
    onComplete(): void
}

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    return <>
        <ScrollToTop />
        <Zad5Scene onComplete={onComplete} />
        <div className="button-list">
            <button className="button" onClick={onComplete}>Zrobione!<i className="icon ok" /></button>
        </div>
    </>
}
