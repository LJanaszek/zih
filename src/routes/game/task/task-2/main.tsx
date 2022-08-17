import Box from "../../../../components/layout/box"
import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header";
import BirdsTask from "../../../../components/task-widgets/birds";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";

type Props = {
    onComplete(): void
}

export default function TaskMain({onComplete}: Props) {

    useRemoveHeader();

    return <FillScreenWithHeader>
        <BirdsTask onComplete={onComplete} />
    </FillScreenWithHeader>
}
