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
            <h2>Ulica Handlowa i ulica Krokodyli</h2>
            <p>
                Zdarza się, że ulica Handlowa jest porównywana do ulicy Krokodyli opisanej przez Schulza. Zapoznajcie się z poniższymi cytatami z opowiadania.
            </p>
            <figure>
                <blockquote>
                    <p>
                        Mało kto, nie uprzedzony, spostrzegał dziwną osobliwość tej dzielnicy: brak barw, jak gdyby w tym tandetnym, w pośpiechu wyrosłym mieście nie można było sobie pozwolić na luksus kolorów.
                    </p>
                    <p>
                        Cała sceneria wydaje się chwilami fotografią z ilustrowanej gazety, tak szare, tak płaskie są domy, ludzie i pojazdy. Ta rzeczywistość jest cienka jak papier i wszystkimi szparami zdradza swą imitatywność.
                    </p>
                    <p>
                        Szary, bezosobisty ten tłum jest nader przejęty swą rolą i pełen gorliwości w demonstrowaniu wielkomiejskiego pozoru. Wszelako, mimo zaaferowania i interesowności, ma się wrażenie błędnej, monotonnej, bezcelowej wędrówki, jakiegoś sennego korowodu marionetek.
                    </p>
                    <p>
                        Nad całą dzielnicą unosi się leniwy i rozwiązły fluid grzechu i domy, sklepy, ludzie wydają się niekiedy dreszczem na jej gorączkującym ciele, gęsią skórką na jej febrycznych marzeniach.
                    </p>
                    <p></p>
                </blockquote>
                <figcaption>Ulica Krokodyli, Bruno Schulz</figcaption>
            </figure>
            <p>
                Jakże te cytaty różnią się od wcześniej przytoczonego opisu ulicy Handlowej, pełnego życia, dźwięków, kolorów i zapachów, a opartego na wspomnieniach dawnych mieszkańców Falenicy. Retrospekcje mogą być jednak tak samo nierealne jak miasto Schulza. Pamięć ulega zniekształceniom i idealizacji – budynki i ulice zmieniają swoje kształty, kolory wydają się wyrazistsze.<br />
                Kto wie, może w rzeczywistości ulicy Handlowej było bliżej do ulicy Krokodyli? Czy wszyscy się znali? Czy zapachy i dźwięki zawsze były przyjemne? Tego już się nie dowiemy, ponieważ poszukując odpowiedzi, możemy posiłkować się jedynie wspomnieniami i tą jedną monochromatyczną fotografią.
            </p>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
        </div>
    </TextPage>
}
