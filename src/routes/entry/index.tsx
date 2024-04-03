
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
            <b>Antoni Słonimski</b> to błyskotliwy i złośliwy poeta. Niedługo będzie obchodził 130. rocznicę urodzin. Pisał teksty i w prozie, i wierszem, i nawet dramaty. Ilość szła w parze z jakością, a przynajmniej tak uważa wiele mądrych głów, co się znają na literaturze. 
            </p>
        </div>
        <div className={style.borderPadding}>
            <p className={style.border}>
            Pochodził z rodziny żydowskiej, która przeszła z judaizmu na katolicyzm. W domu Słonimscy mówili po polsku. No, poza lekcjami hebrajskiego, które ojciec zorganizował małemu Antosiowi.
            </p>
        </div>
        {showPopup && <Popup onOKClick={() => { setShowPopup(false) }}>
            <h1 className={styles.h1Popup}>&nbsp;</h1>
            
            <p className={styles.pPopup}>Antoni Słonimski, który będzie naszym przewodnikiem, popularny polsko-żydowski pisarz, poeta oraz krytyk literacki, prezentował zróżnicowany stosunek do żydowskich środowisk tradycyjnych. W kontekście znanych pisarzy żydowskich, takich jak Icchok Lejbusz Perec czy Szalom Asz, którzy zdecydowali się tworzyć w  języku jidysz, czyli języku żydowskim, powstałym około X wieku w południowych Niemczech na bazie jednego z dialektów języka niemieckiego (z dodatkiem elementów hebrajskich, słowiańskich i romańskich), Słonimski wykazywał postawę pełną ambiwalencji. </p>


            <p className={styles.pPopup}>Z jednej strony uznawał bogactwo kultury jidysz oraz wkład tych pisarzy w jej rozwój. Z szacunkiem podchodził do głęboko zakorzenionych tradycji i unikalnego języka, jakimi posługiwali się ci literaci, dostrzegając ich zaangażowanie w zachowanie żydowskiej tożsamości kulturowej. Z drugiej strony, będąc zwolennikiem asymilacji i modernizacji społecznej, dostrzegał wyzwania związane z jednak ograniczonym zasięgiem czytelnictwa pisarzy jidysz jedynie do społeczności żydowskiej. W świetle ówczesnych dążeń do integracji społecznej, nawoływał raczej do współdzielenia kultury i asymilacji z polską większością.</p>


            <p className={styles.pPopup}>Ostateczny stosunek Słonimskiego do pisarzy tworzących w jidysz ujawniał mieszankę respektu dla dziedzictwa kulturowego i troski o adaptację do nowoczesnych, uniwersalnych wartości. Jego perspektywa ilustruje konflikt pomiędzy tradycją a współczesnością, stanowiąc jednocześnie odzwierciedlenie ówczesnych debat na temat tożsamości oraz roli mniejszości kulturowych w społeczeństwie.</p>

        </Popup>}
        <div className="button-list">
            <Link to={getGamePageRoute()} className="button-hand" />
        </div>
    </TextPage>
}
