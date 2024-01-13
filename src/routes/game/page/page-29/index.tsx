import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import stern from "../../../../assets/stern.png"
import Page92Widget2 from "./widget-2"
import c from "./sculp.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view-2">

            <p className="paragraph-find">Wyświetlą Ci się wizerunki kolejnych rzeźb. Rozejrzyj się wokół zegara słonecznego i wpisz ich nazwy. Każda jest podpisana.

            </p>
            <Page92Widget2
            relations={[
                0,
                1,
                2,
                3
            ]}
            interpretations={[
                "astronomia",
                "medycyna",
                "historia",
                "geografia",
            ]}
        />

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
