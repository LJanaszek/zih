import Box from "../../../../components/layout/box"

type Props = {
    onComplete(): void
}

export default function TaskPlot({onComplete}: Props) {
    return <Box>
        <p>fabuła po zadaniu</p>
        <button onClick={onComplete}>Dalej</button>
    </Box>
}
