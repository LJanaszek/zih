import { useState } from "react"
import calc from "../../../../assets/calc.png"
import slonimski from "../../../../assets/slonimski.png"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showButton, setShowButton] = useState(false)
    return <div>
        
        <div className="page-view page-view-slon">
        <img src={slonimski} className="page-img img-slon" alt="" />
            <p className=""> Litera „S” to wąż, to nawet dziecko powie i jeszcze zasyczy jadowicie. Gazeciarz, co trzyma gazety pod pachą to litera „R”. Spójrz, na jednej nodze się oparł, rękę zawija pod bok. A która litera przedstawia gazeciarza, co jeszcze gazety rozdaje?</p>
            </div>
        <div className="button-check-list">
            <button onClick={() => { setShowButton(false) }}>R</button>
            <button onClick={() => { setShowButton(true) }}>K</button>
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
