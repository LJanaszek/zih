import Box from "../../../../components/layout/box"
import { QuizQuestion } from "../../../../modules/game/bravo/quiz-questions"
import { useState } from "react"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [show, setShow] = useState(false)
    return <Box>
        <QuizQuestion id="3" onComplete={()=>{setShow(true)}} onNext={onNext} />
        {show &&
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>}
    </Box>
}
