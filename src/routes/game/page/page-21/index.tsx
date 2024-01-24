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

            <p>
                Ha-Cefira, gazetka mojego dziadka. Nie wszyscy ją lubili, bo nie dość, że żydowska, to jeszcze postępowa. Konserwatywni Żydzi za nią nie przepadali, nacjonaliści tym bardziej. Ale żeby drzeć na strzępy to przesada, przecież ten papier robią z drzewostanu.  Szkoda polskich sosen, panowie narodowcy! 
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
