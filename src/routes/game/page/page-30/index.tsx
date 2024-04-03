import TextPage from "../../../../components/layout/text-page"
import stern from "../../../../assets/stern.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
        <img className='page-img' src={stern} alt="" />

            <p>
                No, z tą medycyną to taka moja osobista ambicja. Ale trzech pozostałych naprawdę uczyliśmy w warszawskiej Szkole Rabinów. Gratuluję rozwiązania zagadki. Kolejny znak szyfru to jedyna litera, która powtarza się w nazwach wszystkich czterech rzeźb.
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
