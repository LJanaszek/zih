import { Link } from "react-router-dom";
import Box from "../../components/layout/box";
import PageFooter from "../../components/layout/footer";
import TextPage from "../../components/layout/text-page";
import ScrollToTop from "../../utils/widgets/scroll-to-top";
import { getHomeRoute } from "../routes";

export default function AccessibilityPage() {

    return <>
        <ScrollToTop />
        <TextPage>
            <Box>
                <h2>Deklaracja dostepności</h2>
                <p>
                    Wawerskie Centrum Kultury  zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do strony internetowej <a href='https://gra-z-schulzem.wck-wawer.pl/'>https://gra-z-schulzem.wck-wawer.pl/</a>.
                </p>
                <p>
                    Data publikacji strony internetowej: 2022.10.06<br />
                    Data ostatniej aktualizacji strony internetowej: 2022.10.06
                </p>
                <p className="before-list">
                    Strona internetowa jest częściowo zgodna z wytycznymi dostępności stron internetowych i aplikacji mobilnych z powodu niezgodności wymienionych poniżej:
                </p>
                <ul className="after-p">
                    <li>kolory i tła nie mają wystarczającego współczynnika kontrastu</li>
                    <li>zdjęcia i grafiki nie zawierają opisów alternatywnych</li>
                    <li>niektóre odnośniki na stronie nie są wyróżnione podkreśleniem</li>
                    <li>pliki nie są dostępne cyfrowo</li>
                </ul>
                <p className="before-list">
                    Gra mobilna na stronie, nie jest zgodna z wytycznymi dostępności stron internetowych i aplikacji mobilnych. Brak dostępności wynika z:
                </p>
                <ul className="after-p">
                    <li>
                        geolokalizacyjnego charakteru gry, który wymaga od grającego aby ten dotarł do określonego punktu w terenie w celu uruchomienia gry i jej dalszych etapów
                    </li>
                    <li>
                        zadania w grze wymagają użycia urządzenia mobilnego z ekranem dotykowym i aparatem
                    </li>
                </ul>
                <p>
                    Oświadczenie sporządzono dnia: 30.09.2022<br />
                    Deklarację sporządzono na podstawie samooceny.
                </p>
                <h3>Skróty klawiszowe</h3>
                <p>
                    Na stronie internetowej można używać standardowych skrótów klawiaturowych przeglądarki.
                </p>
                <h3>Informacje zwrotne i dane kontaktowe</h3>
                <p>
                    W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Zgłoszenia kierować do Małgorzaty Basiak, mailowo - wawer.wck@um.warszawa.pl, telefonicznie – +48 22 443 70 73.  Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać żądania zapewnienia dostępności.
                </p>
                <p className="before-list">
                    W zgłoszeniu podaj:
                </p>
                <ul className="after-p">
                    <li>swoje imię i nazwisko,</li>
                    <li>swoje dane kontaktowe (np. numer telefonu, e-mail),</li>
                    <li>dokładny adres strony internetowej, na której jest niedostępny element lub treść,</li>
                    <li>opis na czym polega problem i jaki sposób jego rozwiązania byłby dla Ciebie najwygodniejszy.</li>
                </ul>
                <h3>
                    Obsługa wniosków i skarg związanych z dostępnością
                </h3>
                <p>
                    Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej. Można także zażądać udostępnienia informacji za pomocą alternatywnego sposobu dostępu, na przykład przez odczytanie niedostępnego cyfrowo dokumentu, opisanie zawartości filmu bez audiodeskrypcji itp. Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie, o którą stronę internetową chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji za pomocą alternatywnego sposobu dostępu, powinna także określić dogodny dla niej sposób przedstawienia tej informacji. Podmiot publiczny powinien zrealizować żądanie niezwłocznie, nie później niż w ciągu 7 dni od dnia wystąpienia z żądaniem. Jeżeli dotrzymanie tego terminu nie jest możliwe, podmiot publiczny niezwłocznie informuje o tym wnoszącego żądanie, kiedy realizacja żądania będzie możliwa, przy czym termin ten nie może być dłuższy niż 2 miesiące od dnia wystąpienia z żądaniem. Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe, podmiot publiczny może zaproponować alternatywny sposób dostępu do informacji. W przypadku, gdy podmiot publiczny odmówi realizacji żądania zapewnienia dostępności lub alternatywnego sposobu dostępu do informacji, wnoszący żądanie może złożyć skargę w sprawie zapewniana dostępności cyfrowej strony internetowej lub elementu strony internetowej.<br />
                    Po wyczerpaniu wskazanej wyżej procedury można także złożyć wniosek do <a href="https://bip.brpo.gov.pl/pl/content/jak-zglosic-sie-do-rzecznika-praw-obywatelskich">Rzecznika Praw Obywatelskich</a>.
                </p>
                <h3>Dostępność architektoniczna</h3>
                <p>
                    Przestrzeń realizacji gry zlokalizowana jest w Falenicy, w plenerze.Grą rozpoczyna się po uruchomieniu strony z aplikacją w obszarze osiedla Falenica. W niektórych lokalizacjach znajdują się utrudnienia dla osób poruszającym się na wózkach, w postaci braku utwardzonej drogi.<br />
                    Jedna lokalizacja znajduje się na obrzeżach obszaru leśnego na poboczu ulicy, lecz można do niej dotrzeć chodnikiem znajdującym się po przeciwległej stronie drogi. W pobliżu lokalizacji znajdują się dwie rampy krawężnikowe.

                </p>
            </Box>
            <div className="button-list">
                <Link className="button" to={getHomeRoute()}>Powrót<i className="icon next" /></Link>
            </div>
        </TextPage>
        <PageFooter />
    </>
}
