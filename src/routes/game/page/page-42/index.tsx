import { useState } from "react"
import calc from "../../../../assets/calc.png"
import slonimski from "../../../../assets/slonimski.png"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showButton, setShowButton] = useState(false)
    return <div>

        <div className="page-view page-view-poem">
            <img src={slonimski} className="page-img img-slon" alt="" />
            <p className="main-p"> Ojciec mój, oprócz praktyki lekarskiej, słynął z aforyzmów i facecji. Po nim mam tę pasję do języka. Odpowiedź na moją małą zagadkę to przedostatnia litera szyfru. </p>
            <p className="poem">
                Doktor tym kończy <br />
                A rabin zaczyna<br />
                No a bóbr bez tego<br />
                To już jest roślina.
            </p>
        </div>
        <div className="button-check-list">
            <button onClick={() => { setShowButton(true) }}>R</button>
            <button onClick={() => { setShowButton(false) }}>P</button>
            <button onClick={() => { setShowButton(false) }}>B</button>
            <button onClick={() => { setShowButton(false) }}>D</button>
            <button onClick={() => { setShowButton(false) }}>N</button>
        </div>

        {showButton &&
            <div className="button-list">
                <button className="button-hand" onClick={onNext}></button>
            </div>}
    </div>
}
