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
                Przeklęta to praca, pisanie tych felietonów do “Wiadomości Literackich”. Nastaram się, napocę nad kartką papieru, a niewdzięczny czytelnik i tak nie doceni. Zostaje poezja…. Ale przy poezji może skończyć się jeszcze gorzej, prawda?

            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
