import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import ScrollToTop from "../../../../utils/widgets/scroll-to-top"

type Props = {
    onComplete(): void
    onRestart(): void
}

export default function TaskOutro({ onComplete, onRestart }: Props) {
    return <TextPage>
        <ScrollToTop />
        <Box>
            <h2>Wymarzony Paryż</h2>
            <p>
                Dla Brunona Schulza podróże stanowiły raczej wyjątkowe wydarzenie. Skupiał się on na swojej pracy i życiu codziennym w miejscu, które znał najlepiej, rodzinnym Drohobyczu. Dotarcie do dalszych stron wiązało się z olbrzymimi wydatkami i wysiłkiem w celu spełnienia biurokratycznych wymagań.<br />
                Wartym tego wydarzeniem była jego wymarzona wyprawa do Paryża. Trzeba było zdobyć bilety, a do tego pozwolenia, które wymagały dostarczenia przeróżnych dokumentów. Koszt takiej podróży był niezwykle wysoki, więc dla pisarza był to wybór między inwestycją w rozwój kariery na scenie międzynarodowej a kupnem nowych mebli.<br />
                Wybrał to pierwsze, choć – jak sam stwierdził – Paryż nie spełnił jego oczekiwań i wyobrażeń. Schulz pozbył się tam także złudzeń co do kariery światowej. Być może jednak sama podróż i przeżycia na miejscu stały się źródłem inspiracji?
            </p>
            <figure>
                <blockquote>
                    <p>
                        Wytrwałem w Paryżu przeszło trzy tygodnie, mimo że już po pierwszym tygodniu zdałem sobie sprawę, że nie zrealizuję mego programu tutejszego. Mimo to jestem zadowolony, żem był w Paryżu, widział tyle zdumiewających rzeczy, zobaczył raz z bliska, a nie za pośrednictwem reprodukcyj – sztukę wielkich epok. Widziałem rzeczy piękne, wstrząsające i straszne.
                    </p>
                </blockquote>
                <figcaption>z listu Brunona Schulza do Romany Halpern</figcaption>
            </figure>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
            <button className="button" onClick={onRestart}>Uruchom ponownie<i className="icon task-start" /></button>
        </div>
    </TextPage>
}
