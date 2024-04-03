import { useState } from "react";
import OrderQuestionLayoutWIthImg from "../../../../components/order-question-widget-for-img";
type Props = {
    onNext(): void
}


export default function Page5({ onNext }: Props) {
    const [showNext, setShowNext] = useState(false);
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
            onInComplete={() => {}}
        />
        {showNext && <div className="button-list"> <button className="button-hand" onClick={onNext}></button></div>}
    </div>


}

