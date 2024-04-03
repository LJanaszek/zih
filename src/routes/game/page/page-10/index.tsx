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
                Pradziad mój był uczonym, prekursorem cybernetyki, twórcą pierwszej maszyny do liczenia. Ja natomiast, wraz z Julianem Tuwimem, jesteśmy twórcami pierwszego w historii alfabetycznego spisu wszystkich liczb od jednego do stu. To wcale nie jest takie proste!

            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
