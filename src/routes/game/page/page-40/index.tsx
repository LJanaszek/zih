import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
import CheckboxAnswerForm from "../../../../components/task-widgets/checkboxAnswerForm/checkboxAnswerForm"
import OrderQuestionLayout from "../../../../components/task-widgets/order-question-widget"
import { useState } from "react"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    
    const [showNext, setShowNext] = useState(false);
//     const child = document.createElement('div');
// child.innerText = 'Kiedyś, gdy siostra miała odrę, czy też różę,';
// document.getElementById('order-div')!.insertBefore(child, .children[0])
    return <>
        <div>
            <p className="task-paragraph">Ułóż w kolejności wersy fragmentu mojego wiersza "Popiół i wiatr"</p>
            <OrderQuestionLayout
                items={[

                    { correctPlace: 3, text: 'Gdzieś między rautem balem, koncertem, kościołem,' },
                    { correctPlace: 0, text: 'Oddano mnie na parę tygodni do dziadka,' },
                    { correctPlace: 2, text: 'Prawie rok przemieszkałem, nim się w końcu matka' },
                    { correctPlace: 1, text: 'Miałem tam być przez miesiąc, lecz zostałem dłużej' },
                    { correctPlace: 4, text: 'Spostrzegła przerażona, że z domu zniknąłem. ' },






                ]}
                onComplete={() => (setShowNext(true))}
                firsLine="Kiedyś, gdy siostra miała odrę, czy też różę," />


        </div>
        {showNext &&
            <div className="button-list">
                <button className="button-hand" onClick={onNext}></button>
            </div>}


    </>
}
