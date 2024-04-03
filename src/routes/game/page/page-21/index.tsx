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
                „Ha-Cefira”, gazetka mojego dziadka. Nie wszyscy ją lubili, bo nie dość, że żydowska, to jeszcze postępowa. Konserwatywni Żydzi za nią nie przepadali, nacjonaliści tym bardziej. Ale żeby drzeć na strzępy, to przesada, przecież ten papier robią z drzewostanu. Szkoda polskich sosen, panowie narodowcy!
            </p>

        </div>
        {showPopup && <Popup onOKClick={() => { setShowPopup(false) }}>
            <h1 className={style.h1Popup}>Znaczenie Haskali w Polsce w XIX wieku</h1>

            <p className={style.pPopup}>Synem Abrahama Sterna był, urodzony w 1810 roku w Białymstoku, Chaim Zelig Słonimski, również wynalazca, matematyk i astronom, którego naukowym przewodnikiem był Jechiel Zabłudowski, jeden z pionierów Haskali. Był to ruch intelektualny, którego początki datuje się na późne lata XVIII wieku, opowiadający się za przyjęciem przez Żydów oświeceniowych ideałów. Haskala stanowiła złożone zjawisko kulturowe i intelektualne, rozwijające się również w społeczności żydowskiej XIX-wiecznej rozbiorowej Polski. Głównym celem tego ruchu było wprowadzenie modernizacji, edukacji i procesu akulturacji wśród Żydów.
            </p>
            <p className={style.pPopup}>Istotnymi założeniami Haskali były promocja edukacji świeckiej, popularyzacja języka polskiego oraz rozwijanie nauk przyrodniczych. Koncepcja ta opierała się na przekonaniu, że poprzez integrację z kulturą dominującą, Żydzi zdołają osiągnąć wyższe pozycje społeczne i ekonomiczne. Działacze Haskali dążyli do przełamania izolacji społeczności żydowskiej i zwiększenia jej uczestnictwa w życiu państwa, które zamieszkiwała. </p>

            <p className={style.pPopup}>W Polsce, gdzie społeczność żydowska była liczna, Haskala miała znaczący wpływ. Wprowadzała nowe standardy edukacyjne, propagowała rozwijanie umiejętności zawodowych i wspierała proces asymilacji kulturowej. Niemniej jednak, nie wszyscy Żydzi popierali te postulaty. Grupy ortodoksyjne, czyli te, które odrzuciły XVIII-wieczne reformy religijne i jednocześnie nie podzielały nowoczesnych poglądów oraz praktyk, obawiając się utraty religijnej tożsamości, starały się za wszelką cenę utrzymać znane sobie zasady życia.</p>

            <p className={style.pPopup}>Mimo kontrowersji Haskala odegrała kluczową rolę w modernizacji społeczności żydowskiej, otwierając drogę do nowych możliwości edukacyjnych i społecznych. Jest niezaprzeczalnym faktem, że jej wpływ widoczny był w długoterminowych przemianach społecznych i kulturowych, które ukształtowały losy polskich Żydów w XIX wieku i później.</p>

        </Popup>}
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
