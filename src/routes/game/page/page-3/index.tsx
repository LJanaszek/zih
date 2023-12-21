import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import { QuizQuestion, QuizQuestionDummy } from "../../../../modules/game/questions/quiz-questions"

type Props = {
    onNext(): void
}
var showButton = false;
export default function Page1({ onNext }: Props) {
    return <TextPage>
        <Box>
        <QuizQuestion id='1' onNext={onNext} showPopup/>
    
        </Box>
    </TextPage>
}
