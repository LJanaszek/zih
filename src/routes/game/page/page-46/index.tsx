import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
        <img className='page-img' src={slonimski} alt="" />

            <p>SŁONIMSKI: Po publikacji pewnego wiersza zostałem podstępnie zwabiony do kawiarni i pobity przez młodego fascynata Polski dla Polaków. Zgadnij, co mogło go tak rozjuszyć.

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
