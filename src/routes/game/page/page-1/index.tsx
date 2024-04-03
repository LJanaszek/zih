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
            Czasami zadaję sobie pytanie, dlaczego ludzie robią pewne rzeczy. Dlaczego akurat Ciebie proszę o pomoc z pewną tajemniczą sprawą? Z zasady przy prostych sprawach proste są i powody. Idziesz spać, bo Ci się spać zachciało. A ja Cię proszę o pomoc, bo Ciebie tu przywiało.
            </p>
        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
