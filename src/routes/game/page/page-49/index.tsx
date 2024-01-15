import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
import { useState } from "react"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [show, setShow]= useState(false)
    // const divStyle: CSS.Props ={}
    return <TextPage>
        <div className="page-view">
        <img className='page-img' src={slonimski} alt="" />

            <p>No, ale dość tych smutnych refleksji. Zaraz otworzysz ostatnią obręcz krypteksu. Ostatni znak szyfru to cyfra. Cyfra nie byle jaka, bo gdy leży na boku oznacza nieskończoność. A kiedy stoi, oznacza dokładnie liczbę wypełnionych przez Ciebie luk w moim wierszu.

            </p>

            
        </div>
        <div className="button-check-list">
            <button onClick={() => { setShow(false) }}>5</button>
            <button onClick={() => { setShow(false) }} >6</button>
            <button onClick={() => { setShow(false) }}>7</button>
            <button onClick={() => { setShow(true) }}>8</button>
            <button onClick={() => { setShow(false) }}>9</button>
        </div>
            {show &&
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>}
    </TextPage>
}
