import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
import { QuizQuestion } from "../../../../modules/game/bravo/quiz-questions"
import { useState } from "react"
import style from "./style.module.scss"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [show, setShow] = useState(false)
    return <Box>
        <QuizQuestion id="1" onComplete={()=>{setShow(true)}} onNext={onNext} />
        {/* {show &&
        <div className={style.buttonList}>
        <button className={style.buttonHand} onClick={onNext}></button>
    </div>} */}
        </Box>
    
}
