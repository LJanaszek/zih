import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <Box>
            <h2>ekran A</h2>

            <p>SŁONIMSKI: Czasami zadaję sobie pytanie - dlaczego ludzie robią pewne rzeczy? Dlaczego akurat Ciebie proszę o pomoc z pewną tajemniczą sprawą? Z zasady przy prostych sprawach, proste są i powody. Idziesz spać, bo ci się spać zachciało. A ja cię proszę o pomoc, bo ciebie tu  przywiało. 
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
