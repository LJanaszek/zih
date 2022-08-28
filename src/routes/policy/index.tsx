import { Link } from "react-router-dom";
import Box from "../../components/layout/box";
import PageFooter from "../../components/layout/footer";
import TextPage from "../../components/layout/text-page";
import ScrollToTop from "../../utils/widgets/scroll-to-top";
import { getHomeRoute } from "../routes";

export default function PolicyPage() {

    return <>
        <ScrollToTop />
        <TextPage>
            <Box>
                <h2>Polityka Prywatności</h2>
                <p>
                    Wawerskie Centrum Kultury z siedzibą w Warszawie przy ulicy Żegańskiej 1a, jako właściciel i Administrator serwisu: _____ (dalej: Serwis) przedstawia poniżej informacje dotyczące zastosowania i wykorzystania w Serwisie plików cookie.
                </p>
                <p className="before-list">
                    W Serwisie administrowanym przez Wawerskie Centrum Kultury wykorzystywane są następujące rodzaje plików cookies:
                </p>
                <ul className="after-p">
                    <li>pliki typu necessary – niezbędne do prawidłowego funkcjonowania strony</li>
                    <li>pliki typu statistics – służące do zbierania statystyk odwiedzin i aktywności za pomocą narzędzia Google Analytics</li>
                    <li>pliki zbierające dane o lokalizacji urządzenia – wykorzystywane w grze mobilnej</li>
                </ul>
                <p className="before-list">
                    Nasze pliki cookie to:
                </p>
                <ul className="after-p">
                    <li>pliki sesyjne – wygasają po zakończeniu sesji np. po wylogowaniu się ze strony internetowej, wg parametrów określonych w Twojej przeglądarce internetowej</li>
                    <li>pliki trwałe – nie są kasowane w momencie zamknięcia okna przeglądarki; wykorzystywane są, aby pomóc nam wspierać komfort korzystania z naszych Serwisów (np. zmiana wyglądu lub wersji stron)</li>
                </ul>
                <p>
                    Serwis zewnętrzny zapewniający usługi analityczne: Google LLC, ma własną <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noreferrer">politykę cookies</a>. Może dodać dane zebrane podczas Twojej wizyty do zbioru danych pozyskanych na Twój temat z innych źródeł.
                </p>
                <p>
                    W każdej chwili możesz edytować ustawienia prywatności na Twoim urządzeniu w ramach ustawień swojej przeglądarki m.in. w zakresie instalowania plików cookies. W każdej chwili możesz też usunąć z pamięci swojego urządzenia pliki cookies zapisane w trakcie przeglądania naszych Serwisów. Ograniczenia w stosowaniu plików cookies mogą utrudnić lub uniemożliwić komfort korzystania z naszych Serwisów.
                </p>
                <p>
                    Instalowanie plików cookies lub uzyskiwanie do nich dostępu nie powoduje zmian w Twoim urządzeniu ani w oprogramowaniu zainstalowanym na tym urządzeniu.
                </p>
            </Box>
            <div className="button-list">
                <Link className="button" to={getHomeRoute()}>Powrót<i className="icon next" /></Link>
            </div>
        </TextPage>
        <PageFooter />
    </>
}
