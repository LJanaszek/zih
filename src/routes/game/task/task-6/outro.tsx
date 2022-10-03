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
            <h2>Śmierć Brunona</h2>
            <p>
                Bruno Schulz zmarł 19 listopada 1942 r. Według niektórych doniesień zginął w trakcie akcji odwetowej na ludności getta za zranienie gestapowca przez żydowskiego aptekarza. Akcja miała charakter ostrzeżenia, brutalnej zemsty za opór w stosunku do okupantów. Getto w Drohobyczu, podobnie jak w Falenicy i całej okupowanej Polsce, było łatwym miejscem do przeprowadzenia takich działań. Bezbronni Żydzi byli częstym celem brutalnych represji. Jedną z ofiar miał być Bruno Schulz.<br />
                Inne relacje sugerują, że śmierć artysty była wynikiem konfliktu między dwoma hitlerowcami Felixem Landauem i Karlem Güntherem. Pierwszy z nich wykorzystywał zdolności plastyczne Schulza, zlecając mu ozdabianie pokojów we własnej willi i budynku kasyna. Protegowany Günthera, dentysta Löwa zginął z rąk Landaua, więc Günther postanowił wyrównać rachunki, mordując Schulza. Zgodnie z relacjami świadków wydarzyło się to na dzień przed planowaną ucieczką artysty.<br />
                Sprzeczne są również relacje osób, które miały być obecne podczas grzebania zwłok Schulza. Każda z nich podaje inną lokalizację i okoliczności. Prawdy o tych tragicznych wydarzeniach nie udało się ustalić. Być może zagadkę tę rozwikła kolejne pokolenie historyków.
            </p>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
        </div>
    </TextPage>
}
