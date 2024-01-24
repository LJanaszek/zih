import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
            <img src={slonimski} className='page-img' alt="" />

            <p>
            Ja zaś żyję spokojnie i nie czekam ani na Mesjasza, ani na generała na białym koniu. Czas umilam sobie i innym, pisząc felietony, a po pracy - zagadki i niespodzianki. Jeżeli znajdziesz poprawny szyfr i otworzysz krypteks, odkryjesz skarb rodu Słonimskich. Powodzenia!
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
