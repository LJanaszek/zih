import TextPage from "../../../../components/layout/text-page"
import stern from "../../../../assets/slonimski.png"
import { useState } from "react"
import ButtonInfo from "../../../../components/buttonInfo"
import { Popup } from "../../../../components/moreInfo/popup"
import style from "../../../../components/moreInfo/popus.module.scss"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState(false)
    return <TextPage>
        <ButtonInfo onOKClick={()=>{setShowPopup(true)}}/>
        <div className="page-view">
            <img src={stern} alt="" className='page-img'/>

            <p>
            Mój pradziad, Abraham Stern wynalazł maszynę do liczenia. Tęgi był z niego łeb, więc został zaproszony przez Stanisława Staszica do Towarzystwa Przyjaciół Nauk. Nie wszystkim się podobało, że się nosił po żydowsku: w szacie polskiego Izraelity i z brodą czarnorudawą.
            </p>

            {/* <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure> */}

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
        {showPopup && <Popup onOKClick={()=>{setShowPopup(false)}}> 
        <h1 className={style.h1Popup}>Możliwości awansu społecznego Żydów w&nbsp;Kongresówce</h1>
        
        <p className={style.pPopup}>W XIX-wiecznym Królestwie Kongresowym istniejącym od 1815 roku, zamieszkałym przez różnorodne grupy narodowe i religijne, możliwości awansu społecznego Żydów były ograniczone. Mimo napotykanych wyzwań, obserwowano stopniowy wzrost zdolności Żydów do osiągania wyższych pozycji społecznych. W omawianym okresie, społeczność żydowska skoncentrowana była głównie wokół działań gospodarczych. Żydzi odgrywali kluczową rolę w sektorach handlu, rzemiosła i finansów. 
</p>
        <p className={style.pPopup}>Pomimo trudności, pewna grupa Żydów zdołała osiągnąć istotny awans społeczny poprzez zdobycie edukacji, poszerzanie umiejętności zawodowych oraz nawiązywanie strategicznych koneksji społecznych. W miastach, gdzie społeczność żydowska była lepiej zintegrowana, istniały miejsca, gdzie Żydzi mieli możliwość rozwijać swoje talenty, co przyczyniało się do zdobycia szacunku i uznania. </p>
        <p className={style.pPopup}>Obszar związany z edukacją był jednym z obszarów, w których Żydzi osiągnęli pewien stopień awansu społecznego. Samokształcenie i stopniowo rodzące się świeckie szkolnictwo żydowskie przyczyniały się do rozwijania intelektualnych zdolności, co czasem także otwierało drogę do kariery zawodowej poza tradycyjnymi obszarami związanymi chociażby z handlem.</p>
        <p className={style.pPopup}>Mimo że możliwości awansu społecznego Żydów w Królestwie Kongresowym były ograniczone przez istniejące stereotypy i uprzedzenia, to jednak dzięki wytrwałości, edukacji i zaangażowaniu w różnorodne dziedziny życia społecznego, niektórzy Żydzi byli w stanie przekraczać te bariery.</p>
        <p className={style.pPopup}></p>
        
        </Popup>}
    </TextPage>
}
