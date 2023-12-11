import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <Box>
            <h2>ekran B</h2>

            <p>W kawiarni “Ziemiańskiej” czeka na mnie tajemniczy posłaniec z jeszcze bardziej tajemniczą przesyłką. Kiedy go znajdziesz powiedz, że cię przysyła Antoni Słonimski i pyta kto zacz i co to za liścik.

            </p>

            {/* <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure> */}

        </Box>
        <div className="button-list">
            <button className="button" onClick={onNext}>dalej<i className="icon map" /></button>
        </div>
    </TextPage>
}
