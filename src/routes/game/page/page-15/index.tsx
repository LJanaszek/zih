import { useState } from "react"
import calc from "../../../../assets/calc.png"
import stern from "../../../../assets/stern.png"
import style from "./style.module.scss"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showButton, setShowButton] = useState(false)
    const changeValue = (e: any) => {
        let spans = (document.getElementsByTagName("span"))
        let spans2 = Array.prototype.slice.call(spans)
        let spanValue: string = e.target.value
        console.log(e.target.value)
        spans2.map((a) => {
            if (a.className.length > 0) {
                a.innerText = spanValue
            };

        })
    }
    const ButtonArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // const classes = ${style.spanHidden}
    return (<div>

        <div className="button-check-list">
            {ButtonArr.map((e) => {
                if (e === "5") {
                    return (
                        <button onClick={(e) => { setShowButton(true); changeValue(e) }} value={e}>{e}</button>
                    )
                }
                else {
                    return (
                        <button onClick={(e) => { setShowButton(false); changeValue(e) }} value={e}>{e}</button>
                    )
                }
            })}
        </div>
        <div className={style.div}>


            <div className={style.leftDiv}>
                <p className="">Spójrz na trzy poniższe wyrazy. Wiesz, której cyfry w nich brakuje? Pamiętaj, że na kalkulatorze da się pisać litery, musisz go tylko obrócić do góry nogami!</p>
                <img src={stern} className="stern" alt="" />
            </div>
            <div className={style.rightDiv}>
                {/* <img src={calc} alt="" className={style.img} /> */}
                <p><span className={style.spanHidden} >&nbsp;</span>
                    TA
                    <span className={style.spanHidden} >&nbsp;</span>
                    <span>21</span>C</p>

                <p><span className={style.spanHidden} >&nbsp;</span>
                    T
                    <span>3</span>RN</p>
                <p><span className={style.spanHidden} >&nbsp;</span>
                    <span>70</span>
                    N
                    <span>1</span>
                    M
                    <span className={style.spanHidden} >&nbsp;</span>
                    K
                    <span>1</span></p>

                {showButton &&
                    <div className={style.buttonList}>
                        <button className={style.buttonHand} onClick={onNext}></button>
                    </div>}
            </div>

        </div>





    </div>)
}
