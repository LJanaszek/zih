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
            Mówiłem Ci, że można pisać na kalkulatorze. I mówiłem Ci, że odkryjesz 5KAR8 rodziny Słonimskich. Nie mówiłem Ci tylko jednego, bo nie chciałem psuć niespodzianki. Największym 5KAR83M jest humor!
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
