import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import stern from "../../../../assets/stern.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
            <img src={stern} className='page-img' alt="" />

            <p>Tysiące razy obróciły się wskazówki na zegarach w Towarzystwie Przyjaciół Nauk, zanim mnie przyjęli. A i to niechętnie. Nawet rosyjski car, gdy mu pokazałem swoją maszynę do liczenia, powiedział: “Maszyna jest dobra, ale Żyd jest zły”.
            <br></br><br></br>
            Prawnukiem mojej maszyny rachunkowej jest kalkulator. Ale i na kalkulatorze da się pisać literami. Ha, musisz go tylko obrócić.
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
    </TextPage>
}
