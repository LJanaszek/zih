import Box from "../../../../components/layout/box"
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"

type Props = {
    onNext(): void
}
export default function Page1({ onNext }: Props) {
    return <Box>
        <QuizQuestion id='2' onNext={onNext} showPopup/>

        </Box>
   
}
