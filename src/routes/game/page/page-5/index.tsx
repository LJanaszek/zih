import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import fisher from "../../../../assets/fiszer.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view fisher">
            <img className='page-img' src={fisher} alt="" />

            <p>Kobieta w fioletowym kapeluszu? Była i wyszła, ale przesyłkę zostawiła mnie. Słonimski nie uprzedził, że nie będzie czekać wieczność? Bo wieczność czeka jedynie poetów. Odgadnij moje trzy zagadki, a dam Ci tajemniczy liścik.

            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
