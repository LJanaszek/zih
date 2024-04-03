import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import stern from "../../../../assets/stern.png"
import Page92Widget2 from "./widget-2"
import c from "./sculp.png"
import { useState } from "react"
import Popup from "../../../../components/elements/popup"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showButton, setShowButton] = useState(false)
    return <Box>
        <div className="page-view-2">

            <p className="paragraph-find">
                Wyświetlają Ci się wizerunki kolejnych rzeźb. Rozejrzyj się wokół zegara słonecznego i wpisz ich nazwy. Każda jest podpisana.

            </p>

            <Page92Widget2
                relations={[
                    0, 1, 2, 3
                ]}
                interpretations={[
                    "geografia", //0
                    "medycyna", //1
                    "historia", //2
                    "astronomia", //3
                ]}
                items={[
                    { correctPlace: '3', description: "historia" },
                    { correctPlace: '1', description: "medycyna" },
                    { correctPlace: '2', description: "astronomia" },
                    { correctPlace: '0', description: "geografia" }, //rozpierdol straszny, ale działa
                ]}
                onComplete={() => { setShowButton(true) }}
            />
            {showButton &&
                <Popup onClick={onNext}>
                    <p>Przejdź dalej</p>
                </Popup>
                // <div className="button-list">
                //     <button className="button-hand" onClick={onNext}></button>
                // </div>
            }
        </div>

    </Box>
}
