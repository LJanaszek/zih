import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <Box>
            <h2>ekran E</h2>

            <p>STERN: Tysiące razy obróciły się wskazówki na zegarach w Towarzystwie Przyjaciół Nauk, zanim mnie przyjęli. A i to niechętnie. Nawet rosyjski car, gdy mu pokazałem swoją maszynę do liczenia, powiedział: “Maszyna jest dobra, ale Żyd jest zły”. 
            Prawnukiem mojej maszyny rachunkowej jest kalkulator. Ale i na kalkulatorze da się pisać literami. Ha, musisz go tylko obrócić. 
            </p>

            {/* <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure> */}

        </Box>
        <div className="button-list">
            <button className="button" onClick={onNext}>Dalej<i className="icon map" /></button>
        </div>
    </TextPage>
}
