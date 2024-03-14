
import { Link } from "react-router-dom"
import slonimski from "./slonimski.png"
import TextPage from "../../components/layout/text-page"
import { getGamePageRoute } from "../routes"
import style from "./entry.module.scss"
import styles from "../../components/moreInfo/popus.module.scss"
import { useState } from "react"
import { Popup } from "../../components/moreInfo/popup"
import ButtonInfo from "../../components/buttonInfo"
type Props = {
    onNext(): void
}

export default function Page1() {
    const [showPopup, setShowPopup] = useState(false)
    return <TextPage>
        <ButtonInfo onOKClick={() => { setShowPopup(true) }} />
        <div className={style.entryView}>
            <img className={style.pageImg} src={slonimski} alt="" />
            <p>
            <b>Antoni Słonimski</b> to złośliwy i błyskotliwy poeta. Niedługo będzie obchodził 130. rocznicę urodzin. Pisał teksty i w prozie, i wierszem, i nawet dramaty. Ilość szła w parze z jakością, a przynajmniej tak uważa wiele mądrych głów, co się znają na literaturze. 
            </p>
        </div>
        <div className={style.borderPadding}>
            <p className={style.border}>
            Pochodził z rodziny żydowskiej, która przeszła z judaizmu na katolicyzm. W domu Słonimscy mówili po polsku. No, poza lekcjami hebrajskiego, które ojciec zorganizował małemu Antosiowi.
            </p>
        </div>
        {showPopup && <Popup onOKClick={() => { setShowPopup(false) }}>
            <h1 className={styles.h1Popup}>Stosunek społeczeństwa polskiego do Żydów</h1>
            
            <p className={styles.pPopup}>W XIX wieku Żydzi w Polsce reprezentowali istotną grupę społeczną, aktywnie zaangażowaną w różnorodne przedsięwzięcia gospodarcze. Stosunki między Żydami a Polakami były bardzo złożone. Z jednej strony istniały zakorzenione uprzedzenia wynikające z różnic kulturowych i religijnych; z drugiej strony zaś, szczególnie wśród żydowskich mieszkańców obszarów miejskich, obserwowano dążenia asymilacyjne, w wyniku których następowała integracja jednostek do polskiej grupy kulturowej.</p>


            <p className={styles.pPopup}>Żydzi asymilujący się, którzy dopiero przyjmowali elementy kultury polskiej, stawali się często obiektem krytyki ze strony ortodoksyjnych przedstawicieli swojej społeczności. Dla wielu Polaków zaś zasymilowany Żyd był symbolem postępu i modernizacji, przyczyniającym się do rozwoju nauki, sztuki oraz handlu. Niestety dla niektórych wciąż pozostawał obiektem uprzedzeń antysemickich i stereotypów. Różnice kulturowe i religijne często dominowały nad stopniem asymilacji, wpływając istotnie na stosunki społeczne.</p>


            <p className={styles.pPopup}>XIX-wieczna Polska stanowiła scenę złożonego procesu transformacji społecznej, gdzie obecność zasymilowanych Żydów stanowiła istotny składnik. Mimo że dla wielu reprezentowali symbol postępu, to jednak negatywne stereotypy, obrazujące ich jako obcych, pozostawały dość powszechne. To zjawisko ilustruje bogatą, wielokrotnie złożona, aczkolwiek często trudną do jednoznacznej interpretacji, historię obecności Żydów w Polsce tego okresu.</p>

        </Popup>}
        <div className="button-list">
            <Link to={getGamePageRoute()} className="button-hand" />
        </div>
    </TextPage>
}
