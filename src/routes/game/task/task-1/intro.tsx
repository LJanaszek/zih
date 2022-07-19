import Box from "../../../../components/layout/box"

type Props = {
    onComplete(): void
}

export default function TaskIntro({onComplete}: Props) {
    return <Box>
        <p>Tutaj bedzie jakieś intro do zadania 1.</p>
        <button onClick={onComplete}>Dalej</button>
    </Box>
}
