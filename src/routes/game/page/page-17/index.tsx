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
                Pierwsza cyferka odkryta. Jeszcze cztery znaki i otworzysz krypteks. To się uda tylko tęgiej głowie, więc czas się dokształcić. Jazda na uniwersytet!
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
