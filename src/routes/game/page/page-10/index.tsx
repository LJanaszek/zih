import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
            <img src={slonimski} className='page-img' alt="" />

            <p>Pradziad mój był uczonym, prekursorem cybernetyki, twórcą pierwszej maszyny do liczenia.  Ja natomiast, wraz z Julianem Tuwimem, jesteśmy twórcami pierwszego w historii alfabetycznego spisu wszystkich liczb od jednego do stu. To nie jest wcale takie proste!

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
