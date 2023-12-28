import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import stern from "../../../../assets/slonimski.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
            <img src={stern} alt="" className='page-img'/>

            <p>
            Mój pradziad, Abraham Stern wynalazł maszynę do liczenia. Tęgi był z niego łeb, więc został zaproszony przez Stanisława Staszica do Towarzystwa Przyjaciół Nauk. Nie wszystkim się podobało, że się nosił po żydowsku: w szacie polskiego Izraelity z broda czarnorudawą.
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
