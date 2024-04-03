import Box from "../../../../components/layout/box"
import { QuizQuestion } from "../../../../modules/game/bravo/quiz-questions"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <Box>
        <QuizQuestion id="1" onComplete={() => { }} onNext={onNext} />
    </Box>

}
