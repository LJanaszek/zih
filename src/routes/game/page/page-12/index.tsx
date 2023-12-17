import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <Box>
            <h2>ekran C</h2>

            <p>SŁONIMSKI: Mój pradziad, Abraham Stern wynalazł maszynę do liczenia. Tęgi był z niego łeb, więc został zaproszony przez Stanisława Staszica do Towarzystwa Przyjaciół Nauk. Nie wszystkim się podobało, że się nosił po żydowsku: w szacie polskiego Izraelity z broda czarnorudawą.
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
