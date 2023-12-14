import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"

type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <Box>
            <h2>Ekran E</h2>

            <p>FRANZ FISZER: Kobieta w fioletowym kapeluszu? Była i wyszła, ale przesyłkę zostawiła mnie. Słonimski nie uprzedził, że nie będzie czekać wieczność? Bo wieczność czeka jedynie poetów. . Odgadnij moje trzy zagadki, a dam ci tajemniczy liścik.
            </p>

        </Box>
        <div className="button-list">
            <button className="button" onClick={onNext}>dalej<i className="icon map" /></button>
        </div>
    </TextPage>
}
