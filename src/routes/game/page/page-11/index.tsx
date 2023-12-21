import { useCallback, useState } from "react";
import lights from "../../../../assets/slonimski.png"
import police from "../../../../assets/slonimski.png"
import signs from "../../../../assets/slonimski.png"
import OrderQuestionLayoutWIthImg from "../../../../components/order-question-widget-for-img";
import Popup from "../../../../components/elements/popup";
type Props = {
    onNext(): void
}


export default function Page5({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const onClosePopupClicked = useCallback(() => {
        setShowPopup(false);
        setShowIncor(false)
    }, [setShowPopup]);
    const [showNext, setShowNext] = useState(false);
    const [showOnIncor, setShowIncor] = useState(false);
    return <div >
        <div className="">
            
            <p>Ile liczb w zakresie od jednego do stu zaczyna się na tę literę? Uszereguj pozycje od największej do najmniejszej. Jeżeli ilość liczb zaczynających się na daną literę w spisie jest równa ilości liczb zaczynającej się na inną literę, są one w jednej grupie.</p>
        </div>
        <OrderQuestionLayoutWIthImg
            items={[
                { correctPlace: 1, text: lights, description: "A, B, E, F, G, H, I, K, L, M, N, Q, R, U, V, W, X, Y, Z" },
                { correctPlace: 2, text: signs, description: "J" },
                { correctPlace: 0, text: police, description: "D, S" },
                { correctPlace: 3, text: police, description: "DC, O, P, T" },
            ]}
            onComplete={() => { setShowNext(true) }}
            onInComplete={() => { setShowIncor(true); setShowPopup(true) }}
        />
        {showNext && <Popup onClick={onNext}> <p>BRAWO</p></Popup>}
            
        
        {/* {showOnIncor && showPopup && <Popup><p>Spróbuj jeszcze raz</p>
            <ButtonLike>
                <button onClick={onClosePopupClicked}>Wróć do zadania</button>
            </ButtonLike>
        </Popup>} */}
    </div>


}

