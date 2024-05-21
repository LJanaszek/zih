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
        <ButtonInfo onOKClick={()=>{setShowPopup(true)}}/>
        <div className="page-view">
            <img className='page-img' src={slonimski} alt="" />

            <p>
                Ojciec mój był lekarzem. Miał humor cięty jak brzytwa lub raczej skalpel, w końcu ukończył Akademię Medyko-Chirurgiczną w Petersburgu. Niech będzie i dla Ciebie inspiracją, bo przed Tobą operacja na żywym słowie!
            </p>

        </div>
        {showPopup && <Popup onOKClick={()=>{setShowPopup(false)}}> 
        <h1 className={style.h1Popup}>&nbsp;</h1>
        
        <p className={style.pPopup}>W XIX-wiecznym Królestwie Polskim społeczność żydowska aktywna była w różnych dziedzinach zawodowych, w tym w handlu, rzemiośle, finansach i usługach, co świadczyło o jej zaangażowaniu w życie gospodarcze. Ta różnorodność zawodowa stanowiła efekt zarówno tradycyjnych praktyk wynikających z kultury żydowskiej, jak i konieczności dostosowania się do zmieniających się warunków społeczno-gospodarczych epoki.</p>

        <p className={style.pPopup}>Kwestia porzucenia judaizmu i przejścia na chrześcijaństwo była zagadnieniem wielowymiarowym. Chrzest zwiększał możliwości awansu społecznego Żydów, zaś zbliżenie się do społeczności nieżydowskiej otwierało drzwi do zawodów i sfer społecznych, co wcześniej było często niedostępne. Trzeba jednak pamiętać, że zabiegi te były często hamowane przez utrzymujące się uprzedzenia i stereotypy społeczne.</p>

        <p className={style.pPopup}>Pewna grupa ochrzczonych Żydów osiągnęła znaczny awans poprzez zdobycie wykształcenia, wykorzystywanie nowych możliwości zawodowych i osiąganie prestiżowych pozycji społecznych. Niemniej jednak, wielu z nich borykało się z trudnościami związanymi z akceptacją w społeczeństwie chrześcijańskim, a pełna asymilacja w tym kontekście była często nieosiągalna.</p>

        <p className={style.pPopup}>Struktura zawodowa Żydów w Królestwie Polskim w XIX wieku wykazywała różnorodność, a wpływ konwersji na chrześcijaństwo na możliwości awansu społecznego był niejednoznaczny, z jednej strony otwierając pewne perspektywy, z drugiej zaś narażając na trudności wynikające z uprzedzeń i braku akceptacji społecznej dla tych znajdujących się „pomiędzy”.</p>
        
        </Popup>}
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
