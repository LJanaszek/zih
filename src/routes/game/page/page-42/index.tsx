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
                Rabin zaczyna<br />
                A bóbr bez tego<br />
                To już jest roślina.
            </p>
        </div>
        <div className="button-check-list">
            <button onClick={() => { setShowButton(true) }}>R</button>
            <button onClick={() => { setShowButton(false) }}>K</button>
            <button onClick={() => { setShowButton(false) }}>W</button>
            <button onClick={() => { setShowButton(false) }}>Z</button>
            <button onClick={() => { setShowButton(false) }}>E</button>
            <button onClick={() => { setShowButton(false) }}>M</button>
            <button onClick={() => { setShowButton(false) }}>P</button>
        </div>

        {/* <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure> */}







        {showButton &&
            <div className="button-list">
                <button className="button-hand" onClick={onNext}></button>
            </div>}
    </div>
}
