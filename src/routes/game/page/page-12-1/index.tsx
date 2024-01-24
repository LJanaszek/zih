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
            Ludzie siedzą i czekają. Żydzi czekają na Mesjasza, Polacy na jakiegoś generała na białym koniu, faceci na kobietę, a kobiety na pięknego i bogatego oficera marynarki, najlepiej cudzoziemca i żeby się przedstawił, zakochał, ożenił, po czym kupił willę i samochód dla nowej rodziny.
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
