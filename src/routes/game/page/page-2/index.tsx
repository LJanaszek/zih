import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <Box>
            <h2>Zaraz ruszamy</h2>

            <p>Będziemy przemieszczać się po określonych punktach i poznawać ich przeszłość, zbierać kawałki historii, wspomnienia, resztki pamięci. Nie dowiemy się, czy wszystkie te rzeczy miały miejsce naprawdę, czy tylko próbowały się zdarzyć. Czy były to wielkie, czy małe zdarzenia – tego również nie stwierdzimy ostatecznie. Celem naszym jest pokazanie tego, co już prawie zapomniane, zmienienie perspektywy i spojrzenie na te kawałki historii z inspiracją zaczerpniętą od niezwykłego artysty, jakim był Bruno Schulz.
                To od was zależy, w jakiej kolejności odwiedzicie poszczególne lokalizacje i jak opowiecie tę historię.
            </p>

            <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure>

        </Box>
        <div className="button-list">
            <button className="button" onClick={onNext}>Przejdź do mapy<i className="icon map" /></button>
        </div>
    </TextPage>
}
