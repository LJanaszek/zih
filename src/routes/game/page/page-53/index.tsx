import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
import { QuizQuestion } from "../../../../modules/game/bravo/quiz-questions"
import { useState } from "react"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [show, setShow] = useState(false)
    return <TextPage>
        <QuizQuestion id="1" onComplete={()=>{setShow(true)}} />
        {show &&
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>}
    </TextPage>
}
