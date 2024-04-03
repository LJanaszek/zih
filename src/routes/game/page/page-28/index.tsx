import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import stern from "../../../../assets/stern.png"
import style from "../../../../components/moreInfo/popus.module.scss"
import { useState } from "react"
import { Popup } from "../../../../components/moreInfo/popup"
import ButtonInfo from "../../../../components/buttonInfo"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState(false)
    return <TextPage>
        <ButtonInfo onOKClick={() => { setShowPopup(true) }} />
        <div className="page-view">
            <img className='page-img' src={stern} alt="" />

            <p>
                To jest zegar mojego kolegi po fachu z Towarzystwa Przyjaciół Nauk. On uczył fizyki w Liceum Warszawskim, a ja zostałem dyrektorem warszawskiej Szkoły Rabinów. Oprócz lektury Tory i Talmudu, uczyliśmy tam też języków obcych i innych przedmiotów.
            </p>
        </div>
        {showPopup && <Popup onOKClick={() => { setShowPopup(false) }}>
            <h1 className={style.h1Popup}>Stosunek środowisk tradycyjnych do integracji żydowskiej  </h1>

            <p className={style.pPopup}>W XIX wieku społeczności żydowskie o charakterze tradycyjnym przejawiały zróżnicowane stanowiska wobec kwestii integracji. Grupy ortodoksyjne, wyraźnie osadzone w tradycji religijnej, często przyjmowały stanowisko nieufności lub wręcz sprzeciwu wobec idei asymilacji.</p>

            <p className={style.pPopup}>Żydzi ortodoksyjni skupiali się na utrzymaniu tradycyjnych praktyk religijnych i społecznościowych, postrzegając integrację jako zagrożenie dla własnej tożsamości kulturowej i religijnej. W ich mniemaniu priorytetem było dochowanie wierności tradycji, przy czym jakakolwiek asymilacja kulturowa była postrzegana jako potencjalne ryzyko utraty dziedzictwa żydowskiego.</p>

            <p className={style.pPopup}>W przeciwieństwie do tego, niektóre społeczności chasydzkie przyjmowały bardziej otwarte podejście do nowych idei i przemian społecznych. Chasydzi, choć równie głęboko zakorzenieni w tradycji, wyrażali pewną akceptację dla integracji, szczególnie w obszarze edukacji. W niektórych przypadkach nawet zezwalali na naukę języka kraju zamieszkania.</p>

            <p className={style.pPopup}>Konflikty między tradycyjnymi społecznościami a zwolennikami integracji przybierały złożone formy. Ostateczny stosunek do tej kwestii był determinowany indywidualnymi przekonaniami, lokalnym kontekstem społecznym oraz wpływem konkretnych przywódców religijnych.</p>

            <p className={style.pPopup}>Podsumowując, społeczności tradycyjne w XIX wieku często dystansowały się od idei integracji, uznając ją za zagrożenie dla norm religijnych i kulturowych. Niemniej jednak zanotować można przypadki, zwłaszcza wśród pewnych grup chasydzkich, gdzie pewne formy integracji, szczególnie w obszarze edukacji, były akceptowane.</p>

        </Popup>}
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
