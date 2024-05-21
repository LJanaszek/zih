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
        <ButtonInfo onOKClick={() => { setShowPopup(true) }} />
        <div className="page-view">
            <img src={stern} alt="" className='page-img' />

            <p>
                Mój pradziad Abraham Stern wynalazł maszynę do liczenia. Tęgi był z niego łeb, więc został zaproszony przez Stanisława Staszica do Towarzystwa Przyjaciół Nauk. Nie wszystkim się podobało, że nosił się po żydowsku: w szacie polskiego Izraelity i z brodą czarnorudawą.
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
        {showPopup && <Popup onOKClick={() => { setShowPopup(false) }}>
            <h1 className={style.h1Popup}>&nbsp;</h1>

            <p className={style.pPopup}>W XIX wieku Żydzi w Polsce, a w zasadzie precyzyjnie rzecz ujmując w Królestwie Kongresowym istniejącym od 1815 roku, reprezentowali istotną grupę społeczną, aktywnie zaangażowaną w różnorodne przedsięwzięcia. W tym okresie, społeczność żydowska skoncentrowana była głównie wokół działań gospodarczych. Żydzi odgrywali kluczową rolę w sektorach handlu, rzemiosła i finansów. Stosunki między Żydami a Polakami były bardzo złożone. Z jednej strony istniały zakorzenione uprzedzenia wynikające z różnic kulturowych i religijnych; z drugiej strony zaś, szczególnie wśród żydowskich mieszkańców obszarów miejskich, obserwowano dążenia asymilacyjne, w wyniku których następowała integracja jednostek do polskiej grupy kulturowej.
            </p>
            <p className={style.pPopup}>Pomimo trudności, pewna grupa Żydów zdołała osiągnąć istotny awans społeczny poprzez zdobycie edukacji, poszerzanie umiejętności zawodowych oraz nawiązywanie strategicznych koneksji społecznych. W miastach, gdzie społeczność żydowska była lepiej zintegrowana, istniały miejsca, gdzie Żydzi mieli możliwość rozwijać swoje talenty, co przyczyniało się do zdobycia szacunku i uznania. </p>
            <p className={style.pPopup}>Obszar związany z edukacją był jednym z obszarów, w których Żydzi osiągnęli pewien stopień awansu społecznego. Samokształcenie i stopniowo rodzące się świeckie szkolnictwo żydowskie przyczyniało się do rozwijania intelektualnych zdolności, co czasem także otwierało drogę do kariery zawodowej poza tradycyjnymi obszarami związanymi chociażby z handlem.</p>
            <p className={style.pPopup}>Mimo że możliwości awansu społecznego Żydów w Królestwie Kongresowym były ograniczone przez istniejące stereotypy i uprzedzenia, to jednak dzięki wytrwałości, edukacji i zaangażowaniu w różnorodne dziedziny życia społecznego, niektórzy Żydzi byli w stanie przekraczać te bariery.</p>
            <p className={style.pPopup}>Przykładem takiego człowieka był niewątpliwie Abraham Stern, polski Żyd, urodzony w 1769 roku w Hrubieszowie, który już od młodych lat wykazywał niezwykle zdolności matematyczne. Zapisał się w historii jako uczony, mechanik, a także wynalazca maszyny liczącej, która poza wykonywaniem czterech podstawowych działań arytmetycznych potrafiła również wyciągać pierwiastki kwadratowe. Bez wątpienia nazwać można go genialnym umysłem, który zrewolucjonizował swoje czasy.</p>

        </Popup>}
    </TextPage>
}
