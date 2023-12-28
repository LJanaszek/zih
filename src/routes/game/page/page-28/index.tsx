import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import stern from "../../../../assets/stern.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
        <img className='page-img' src={stern} alt="" />

            <p>To jest zegar mojego kolegi po fachu z Towarzystwa Przyjaciół Nauk. On uczył fizyki w liceum Warszawskim, a ja zostałem dyrektorem Warszawskiej Szkoły Rabinów. Oprócz lektury Biblii i Talmudu, uczyliśmy tam też języków obcych i innych przedmiotów. Ciekawi Cię jakich? Wiem, że nie, ale i tak zadam Ci tę zagadkę.

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
