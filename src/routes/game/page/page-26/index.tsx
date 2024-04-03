import Box from "../../../../components/layout/box"
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
                Słyszysz, jak bije zegar? Ja też nie. Dlatego poszukaj takiego zegara, co w ogóle nie bije. Można by pomyśleć, że to zegar pokojowy, a on stoi w parku. I bądź tu mądry!
            </p>
            
        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
