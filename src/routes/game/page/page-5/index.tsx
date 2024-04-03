import TextPage from "../../../../components/layout/text-page"
import fisher from "../../../../assets/fiszer.png"
import ButtonInfo from "../../../../components/buttonInfo"
import { useState } from "react"
import { Popup } from "../../../../components/moreInfo/popup"
import style from "../../../../components/moreInfo/popus.module.scss"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState(false)
    return <TextPage>
        <ButtonInfo onOKClick={()=>{setShowPopup(true)}}/>
        <div className="page-view fisher">
        
            <img className='page-img' src={fisher} alt="" />

            <p>
                Kobieta w fioletowym kapeluszu? Była i wyszła, ale przesyłkę zostawiła mnie. Słonimski nie uprzedził, że nie będzie czekał wieczność? Bo wieczność czeka jedynie poetów. Odgadnij moje trzy zagadki, a dam Ci tajemniczy liścik.
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
        {showPopup && <Popup onOKClick={()=>{setShowPopup(false)}}> 
        <h1 className={style.h1Popup}>&nbsp;</h1>
        
        <p className={style.pPopup}> Postać, którą spotkałeś/spotkałaś to Franc Fiszer. Urodzony w 1860 roku filozof i erudyta. Był stałym bywalcem najmodniejszych warszawskich kawiarni, w których spędzał czas z wieloma znanymi artystami i literatami.  Został zapamiętany dzięki licznym anegdotom, powiedzeniom i żartom stworzonym przez niego i o nim. Zmarł w 1937 roku. Chociaż nie pozostawił po sobie żadnej książki, pojawia się w wielu wspomnieniach polskich artystów okresu międzywojennego.</p>
       
        
        </Popup>}
    </TextPage>
}
