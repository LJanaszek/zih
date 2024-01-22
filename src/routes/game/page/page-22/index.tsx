import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
import Puzzle from "../../../../components/task-widgets/puzzle/puzzle"
import { useState } from "react"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showNext, setShowNext] = useState(false)
    return <Box>
        <div className="page">
            <p className="paragraph-find">Ułóż stronę gazety Ha-Cefira z podartych fragmentów</p>
            <Puzzle onComplete={()=>{setShowNext(true)}}></Puzzle>

        </div>
        {showNext &&
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>}
    </Box>
}
