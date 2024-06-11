import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {

    return <TextPage>
        <div className="page-view" >
            
            <div className="right-div" >
                <p>
                    Mam!
                </p>
                <p>
                    Ach nie, to bilet na tramwaj i jakieś paprochy.
                </p>
                <p>
                    No dobra, znam go na pamięć. Tak sobie chciałem pożartować, bo będę za Tobą tęsknił. Kod to: 1895#.
                </p>
            </div>
            <div className="slonim-div">
            <img className='' src={slonimski} alt="" />
                <p className="under-quote">
                    Gratulacje! Udało Ci się ukończyć grę! Za pomocą otrzymanego kodu otwórz skrzynkę znajdującą się w holu Żydowskiego Instytutu Historycznego.
                </p>
            </div>

        </div>
    </TextPage>
}
