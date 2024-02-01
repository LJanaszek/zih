import { useState } from "react"
import calc from "../../../../assets/calc.png"
import stern from "../../../../assets/stern.png"
import style from "./style.module.scss"
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
        <div className={style.div}>


            <div className={style.leftDiv}>
                <p className="">Spójrz na trzy poniższe wyrazy. Wiesz jakiej cyfry w nich brakuje? Pamiętaj, że na kalkulatorze da się pisać litery, musisz go tylko obrócić do góry nogami!</p>
                <img src={stern} className="stern" alt="" />
            </div>
            <div className={style.rightDiv}>
                <img src={calc} alt="" className={style.img} />

                {showButton &&
                    <div className={style.buttonList}>
                        <button className={style.buttonHand} onClick={onNext}></button>
                    </div>}
            </div>
        </div>





    </div>
}
