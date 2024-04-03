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
    const [showNext, setShowNext] = useState(false)
    return <Box>
        <div>
            <p className="paragraph-find">
                Ułóż w kolejności wersy fragmentu mojego wiersza „Popiół i wiatr”.
            </p>
            <OrderQuestionLayout
                items={[
                    // { correctPlace: 0, text: 'Ojciec mój szanowany był “Pod Filarami”' },
                    { correctPlace: 4, text: 'Może mniej katolicki - ale bardziej rzymski' },
                    { correctPlace: 0, text: '(każdy stary Warszawiak go ode mnie woli),' },
                    { correctPlace: 3, text: 'Piękny profil miał młody pan doktor Słonimski,' },
                    { correctPlace: 2, text: 'W dawnych czasach poczciwych moskiewskiej niewoli,' },
                    { correctPlace: 1, text: 'Żyła kiedyś Warszawa jego dowcipami,' },



                ]}
                onComplete={() => (setShowNext(true))}
                firsLine="Ojciec mój szanowany był “Pod Filarami”"
            />



        </div>
        {showNext &&
            <div className="button-list">
                <button className="button-hand" onClick={onNext}></button>
            </div>}


    </Box>
}
