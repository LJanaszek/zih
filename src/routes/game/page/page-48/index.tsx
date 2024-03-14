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
                Ojczyzna, to słowo brzmi dumnie, czyż nie? W imię Ojczyzny młody narodowiec umówił się ze mną na spotkanie w kawiarni Ziemiańskiej, a potem spoliczkował mnie ohydnie za wiersz “Dwie Ojczyzny” i uciekł. Życie to teatr, więc łatwo może się zmienić w dramat. A wielkie teatry to wielkie dramaty.
            </p>

        </div>
        {showPopup && <Popup onOKClick={() => { setShowPopup(false) }}>
            <h1 className={style.h1Popup}>Stosunek Antoniego Słonimskiego do żydowskich środowisk tradycyjnych. </h1>
            
            <p className={style.pPopup}>Antoni Słonimski, znany polski poeta oraz krytyk literacki, prezentował zróżnicowany stosunek do żydowskich środowisk tradycyjnych i ich literatury. W kontekście znanych pisarzy żydowskich, takich jak Icchok Lejbusz Perec czy Szalom Asz, którzy zdecydowali się tworzyć w  języku jidysz, czyli języku żydowskim, powstałym około X wieku w południowych Niemczech na bazie jednego z dialektów języka niemieckiego (z dodatkiem elementów hebrajskich, słowiańskich i romańskich), Słonimski wykazywał postawę pełną ambiwalencji. </p>


            <p className={style.pPopup}>Z jednej strony uznawał bogactwo kultury jidysz oraz wkład tych pisarzy w jej rozwój. Z szacunkiem podchodził do głęboko zakorzenionych tradycji i unikalnego języka, jakimi posługiwali się ci literaci, dostrzegając ich zaangażowanie w zachowanie żydowskiej tożsamości kulturowej. Z drugiej strony, będąc zwolennikiem asymilacji i modernizacji społecznej, dostrzegał wyzwania związane z jednak ograniczonym zasięgiem czytelnictwa pisarzy jidysz jedynie do społeczności żydowskiej. W świetle ówczesnych dążeń do integracji społecznej, nawoływał raczej do współdzielenia kultury i asymilacji z polską większością.</p>


            <p className={style.pPopup}>Ostateczny stosunek Słonimskiego do pisarzy tworzących w jidysz ujawniał mieszankę respektu dla dziedzictwa kulturowego i równoczesnej troski o adaptację do nowoczesnych, uniwersalnych wartości. Jego perspektywa ilustruje konflikt pomiędzy tradycją a współczesnością, stanowiąc jednocześnie odzwierciedlenie ówczesnych debat na temat tożsamości oraz roli mniejszości kulturowych w społeczeństwie.</p>

        </Popup>}
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
