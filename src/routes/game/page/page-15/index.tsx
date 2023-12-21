import { useState } from "react"
import calc from "../../../../assets/calc.png"
import stern from "../../../../assets/stern.png"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showButton, setShowButton] = useState(false)
    return <div>
        <div className="stern_div">

            <img src={calc} alt="" />
            <div className="p15_stern">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sunt ut ullam! Est iste quisquam, consequuntur blanditiis quo inventore dolores reprehenderit voluptate commodi repudiandae provident minima quae architecto quidem tempore!</p>
                <img src={stern} className="stern" alt="" />
            </div>
            {/* <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure> */}



        </div><div className="button-check-list">
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
        {showButton &&
            <div className="button-list">
                <button className="button" onClick={onNext}>Dalej<i className="icon map" /></button>
            </div>}
    </div>
}
