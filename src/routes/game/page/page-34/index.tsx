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
                Siedzieliśmy raz przy kolacji, gdy nagle wpadł przyjaciel ojca, sybirak Czartkowski, palto rzucił w przedpokoju i zdyszany siadł przy stole. Matka szybko nakryła. Za chwilę załomotały do drzwi kolby karabinowe. “Czy tu się nie ukrył zbiegły nam przestępca?” Trzeba było szybko schować dokumenty, które przyniósł Czartkowski. Tylko gdzie?
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
