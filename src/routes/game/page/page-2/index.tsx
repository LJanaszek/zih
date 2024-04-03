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
                W kawiarni Ziemiańskiej czeka na mnie tajemniczy posłaniec z jeszcze bardziej tajemniczą przesyłką. Kiedy go znajdziesz, powiedz, że przysyła Cię Antoni Słonimski i pyta, kto zacz i co to za liścik.
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
