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

            <p>Pradziad mój był prekursorem cybernetyki. Ojciec mój był lekarzem ludzi biednych, popularnym i lubianym w całej Warszawie. Gdy kiedyś w zaświatach zbierze się rada familijna Słonimskich i gdy poważni ludzie nauki spytają, co zdziałałem dla dobra ludzkości, niewiele będę miał na swoją obronę. 

            </p>

            {/* <figure>
                <blockquote>
                    <p>Cały trick polega na tym, że cofnęliśmy czas. Spóźniamy się tu z czasem o pewien interwał, którego wielkości niepodobna określić.</p>
                </blockquote>
                <figcaption>Sanatorium pod klepsydrą, Bruno Schulz</figcaption>
            </figure> */}

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
