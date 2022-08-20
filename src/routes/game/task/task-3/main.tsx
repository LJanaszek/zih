import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header";
import TreeTask from "../../../../components/task-widgets/tree";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header"

type Props = {
    onComplete(): void
}

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    return <FillScreenWithHeader>
        <TreeTask onComplete={onComplete} />
    </FillScreenWithHeader>
}
