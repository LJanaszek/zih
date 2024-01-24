import { useState } from "react"
import calc from "../../../../assets/calc.png"
import stern from "../../../../assets/stern.png"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showButton, setShowButton] = useState(false)
    return <div>
        <div className="button-check-list">
            <button onClick={() => { setShowButton(false) }}>0</button>
            <button onClick={() => { setShowButton(false) }} >1</button>
            <button onClick={() => { setShowButton(false) }}>2</button>
            <button onClick={() => { setShowButton(false) }}>3</button>
            <button onClick={() => { setShowButton(false) }}>4</button>
            <button onClick={() => { setShowButton(true) }}>5</button>
            <button onClick={() => { setShowButton(false) }}>6</button>
            <button onClick={() => { setShowButton(false) }}>7</button>
            <button onClick={() => { setShowButton(false) }}>8</button>
            <button onClick={() => { setShowButton(false) }}>9</button>
        </div>
        <div className="stern_div page-view">

            <img src={calc} alt="" />
            <p className="">Spójrz na trzy poniższe wyrazy. Wiesz jakiej cyfry w nich brakuje? Pamiętaj, że na kalkulatorze da się pisać litery, musisz go tylko obrócić do góry nogami!</p>
                
        
            {/* <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure> */}



        </div>
        
        
        
        {showButton &&
            <div className="button-list">
                <button className="button-hand" onClick={onNext}></button>
            </div>}
            <div className="img-button-block">
        <img src={stern} className="stern" alt="" />
        </div>
    </div>
}
