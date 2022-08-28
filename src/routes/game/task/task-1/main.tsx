import Zad1Photo from "../../../../components/task-widgets/street-photo/photo"
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header"

type Props = {
    onComplete(): void
}

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    return <>
        <Zad1Photo onComplete={onComplete} />
        <div className="button-list">
            <button className="button" onClick={onComplete}>Zrobione!<i className="icon ok" /></button>
        </div>
    </>
}
