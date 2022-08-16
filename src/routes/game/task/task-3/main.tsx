import Box from "../../../../components/layout/box"
import TreeTask from "../../../../components/task-widgets/tree"

type Props = {
    onComplete(): void
}

export default function TaskMain({onComplete}: Props) {
    return <Box>
        <TreeTask onComplete={onComplete} />
        {/* <button onClick={onComplete}>Zrobione!</button> */}
    </Box>
}
