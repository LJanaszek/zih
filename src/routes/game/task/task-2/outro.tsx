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
            <h2>Co żywe, a co nie?</h2>
            <p>
                W tym miejscu granica między willą a lasem uległa zupełnemu zamazaniu. Królestwo roślin wtargnęło z powrotem na teren zajęty niegdyś przez rodzinę Feinerów. W twórczości Schulza jest podobnie. Granice wciąż się zamazują: czy to między miastem a gazetą, czy też wujem Edwardem a dzwonkiem w opowiadaniu „Komety”. Wszelkimi metaforami rządzi tam zmieszanie sfer, któremu towarzyszą animizacja i personifikacja przedmiotów, czy nawet pór dnia i roku, a z drugiej strony – uprzedmiotowienie człowieka.
            </p>
            <figure>
                <blockquote>
                    <p>
                        W pamięci pozostał mi szczególnie jeden kondor, ogromny ptak o szyi nagiej, twarzy pomarszczonej i wybujałej naroślami. Gdy siedział naprzeciw ojca, nieruchomy w swej monumentalnej pozycji odwiecznych bóstw egipskich, z okiem zawleczonym białawym bielmem, które zasuwał z boku na źrenice, ażeby zamknąć się zupełnie w kontemplacji swej dostojnej samotności – wydawał się ze swym kamiennym profilem starszym bratem mego ojca. Ta sama materia ciała, ścięgien i pomarszczonej twardej skóry, ta sama twarz wyschła i koścista, te same zrogowaciałe, głębokie oczodoły. Nawet ręce, silne w węzłach, długie, chude dłonie ojca, z wypukłymi paznokciami, miały swój analogon w szponach kondora. Charakterystyczne jest, że kondor używał wspólnego z moim ojcem naczynia nocnego.
                    </p>
                </blockquote>
                <figcaption>
                Ptaki, Bruno Schulz
                </figcaption>
            </figure>
            <p>
                Zastanówcie się, jak często sami używacie metafor, często robiąc to bezwiednie, z przyzwyczajenia. Przeczytajcie przykłady poetyckich zabiegów językowych i pomyślcie nad własnymi.
            </p>
            <ul>
                <li>brudna robota, </li>
                <li>liście tańczące na wietrze,</li>
                <li>padnięta bateria,</li>
                <li>nadchodząca noc.</li>
            </ul>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
        </div>
    </TextPage>
}
