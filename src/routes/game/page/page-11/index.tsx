import { useCallback, useState } from "react";
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
            
            <p className="paragraph-find">Ile liczb w zakresie od jednego do stu zaczyna się na tę literę? Uszereguj pozycje od największej do najmniejszej. Jeżeli liczba liczb zaczynających się na daną literę w spisie jest równa liczbie liczb zaczynającej się na inną literę, są one w jednej grupie.</p>
        </div>
        <OrderQuestionLayoutWIthImg
            items={[
                { correctPlace: 3,  description: "A, B, E, F, G, H, I, K, L, M, N, Q, R, U, V, W, X, Y, Z" },
                { correctPlace: 2,  description: "J" },
                { correctPlace: 0,  description: "D, S" },
                { correctPlace: 1,  description: "C, O, P, T" },
            ]}
            onComplete={() => { setShowNext(true) }}
            onInComplete={() => { setShowIncor(true); setShowPopup(true) }}
        />
        {showNext && <div className="button-list"> <button className="button-hand" onClick={onNext}></button></div>}
            
        
        {/* {showOnIncor && showPopup && <Popup><p>Spróbuj jeszcze raz</p>
            <ButtonLike>
                <button onClick={onClosePopupClicked}>Wróć do zadania</button>
            </ButtonLike>
        </Popup>} */}
    </div>


}

