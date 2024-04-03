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
                Nie poznajesz mnie już? To ja, Abraham Stern. Ot, jak łatwo przychodzi zapomnieć.
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
