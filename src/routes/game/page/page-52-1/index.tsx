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
            Jest kilka rodzajów czytelników. Przykre doświadczenia uczyniły mnie ostrożnym. Zaraz zobaczymy, którym Ty jesteś, gagatku. 
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
