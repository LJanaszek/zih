import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import ScrollToTop from "../../../../utils/widgets/scroll-to-top"

type Props = {
    onComplete(): void
}

export default function TaskOutro({ onComplete }: Props) {
    return <TextPage>
        <ScrollToTop />
        <Box>
            <h2>Tradycja i wiara</h2>
            <p>
                Z pochodzenia Schulz był Żydem, należał do gminy żydowskiej w Drohobyczu. Z jego tekstów i relacji świadków wiadomo, że nie był przesadnie religijny. Mając 43 lata, w związku z planowanym ślubem z Józefiną Szelińską, wystąpił nawet z gminy żydowskiej.<br />
                Schulz w swojej twórczości często nawiązywał jednak do tradycji i kultury żydowskiej, mocno osadzonej w religijności. Rozgraniczenie tych wartości, z naszej perspektywy proste, w latach 30. zeszłego wieku było dużo bardziej skomplikowane. Wtedy bycie Żydem oznaczało jednocześnie przynależność religijną, a kultywowanie tradycji było również formą dbania o ciągłość narodu.<br />
                Różnicowanie tych sfer i polemika z przyjętymi normami społecznymi były ważnym elementem kreowanego przez Schulza świata przedstawionego
            </p>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
        </div>
    </TextPage>
}
