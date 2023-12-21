import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import fisher from "../../../../assets/fiszer.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
            <img src={fisher} alt="" />

            <p>W kawiarni “Ziemiańskiej” czeka na mnie tajemniczy posłaniec z jeszcze bardziej tajemniczą przesyłką. Kiedy go znajdziesz powiedz, że cię przysyła Antoni Słonimski i pyta kto zacz i co to za liścik.

            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
