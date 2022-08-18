import { useCallback } from "react";
import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header";
import { BirdTaskState } from "../../../../components/task-widgets/birds";
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
