import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
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
            <img className='page-img' src={slonimski} alt="" />

            <p>
                Ojczyzna – to słowo brzmi dumnie, czyż nie? W imię ojczyzny młody narodowiec umówił się ze mną na spotkanie w kawiarni Ziemiańskiej, a potem spoliczkował mnie ohydnie za wiersz „Dwie ojczyzny” i uciekł. Życie to teatr, więc łatwo może się zmienić w dramat. A wielkie teatry to wielkie dramaty.
            </p>

        </div>
        {showPopup && <Popup onOKClick={() => { setShowPopup(false) }}>
            <h1 className={style.h1Popup}>&nbsp;</h1>

            <p className={style.pPopup}>W XIX wieku Żydzi w Polsce reprezentowali istotną grupę społeczną, aktywnie zaangażowaną w różnorodne przedsięwzięcia gospodarcze. Stosunki między Żydami a Polakami były bardzo złożone. Z jednej strony istniały zakorzenione uprzedzenia wynikające z różnic kulturowych i religijnych; z drugiej strony zaś, szczególnie wśród żydowskich mieszkańców obszarów miejskich, obserwowano dążenia asymilacyjne, w wyniku których następowała integracja jednostek do polskiej grupy kulturowej.</p>


            <p className={style.pPopup}>Żydzi asymilujący się, którzy dopiero przyjmowali elementy kultury polskiej, stawali się często obiektem krytyki ze strony ortodoksyjnych przedstawicieli swojej społeczności. Dla wielu Polaków zaś zasymilowany Żyd był symbolem postępu i modernizacji, przyczyniającym się do rozwoju nauki, sztuki oraz handlu. Niestety dla niektórych wciąż pozostawał obiektem uprzedzeń antysemickich i stereotypów. Różnice kulturowe i religijne często dominowały nad stopniem asymilacji, wpływając istotnie na stosunki społeczne.</p>


            <p className={style.pPopup}>XIX-wieczna Polska stanowiła scenę złożonego procesu transformacji społecznej, gdzie obecność zasymilowanych Żydów stanowiła istotny składnik. Mimo że dla wielu reprezentowali symbol postępu, to jednak negatywne stereotypy, obrazujące ich jako obcych, pozostawały dość powszechne. To zjawisko ilustruje bogatą, wielokrotnie złożona, aczkolwiek często trudną do jednoznacznej interpretacji, historię obecności Żydów w Polsce tego okresu.</p>

        </Popup>}
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
