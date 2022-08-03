import Box from "../../../../components/layout/box"

type Props = {
    onComplete(): void
}

export default function TaskMain({onComplete}: Props) {
    return <Box>
        <p>Tutaj będzie zadanie do wykonania 5.</p>
        <button onClick={onComplete}>Zrobione!</button>
    </Box>
}
