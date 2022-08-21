import Box from "../../../../components/layout/box"
import Zad5Scene from "../../../../components/task-widgets/travelers/scene"

type Props = {
    onComplete(): void
}

export default function TaskMain({ onComplete }: Props) {
    return <Box>
        <Zad5Scene onComplete={onComplete} />
        <button onClick={onComplete}>Zrobione!</button>
    </Box>
}
