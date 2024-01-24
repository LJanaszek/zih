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
            Ojczyzna, to słowo brzmi dumnie, czyż nie? W imię Ojczyzny młody narodowiec umówił się ze mną na spotkanie w kawiarni Ziemiańskiej, a potem spoliczkował mnie ohydnie za wiersz “Dwie Ojczyzny” i uciekł. Życie to teatr, więc łatwo może się zmienić w dramat. A wielkie teatry to wielkie dramaty. 
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
