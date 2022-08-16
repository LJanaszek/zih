import Box from "../../../../components/layout/box"

type Props = {
    onComplete(): void
}

export default function TaskOutro({onComplete}: Props) {
    return <Box>
        <p>Super zrobiłeś zadanie 4!</p>
        <button onClick={onComplete}>Dalej</button>
    </Box>
}
