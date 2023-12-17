import { useState } from "react"
import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import classNames from "classnames"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showButton, setShowButton] = useState(false)
    return <TextPage>
        <Box>
            <h2>Zagadka wpisz hasło</h2>

            <p>
                _TA_21C
            </p>
            <p>
                _T3RN
            </p>
            <p>
                _70N1M_K1
            </p>
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

            {/* <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure> */}

        </Box>
        {showButton &&
        <div className="button-list">
            <button className="button" onClick={onNext}>Dalej<i className="icon map" /></button>
        </div>}
    </TextPage>
}
