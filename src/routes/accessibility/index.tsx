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
                    Wawerskie Centrum Kultury  zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do strony internetowej  https://www.wck-wawer.pl.
                </p>
                <p>
                    Data publikacji strony internetowej: 2022.09.05
                    Data ostatniej aktualizacji strony internetowej: 2022.09.__<br />
                </p>
                <p className="before-list">
                    Strona internetowa jest częściowo zgodna z wytycznymi dostępności stron internetowych i aplikacji mobilnych z powodu niezgodności wymienionych poniżej:
                </p>
                <ul className="after-p">
                    <li>kolory i tła nie mają wystarczającego współczynnika kontrastu</li>
                    <li>zdjęcia i grafiki nie zawierają opisów alternatywnych</li>
                    <li>niektóre odnośniki na stronie nie są wyróżnione podkreśleniem</li>
                    <li>pliki nie jest dostępne cyfrowo</li>
                </ul>
                <p className="before-list">
                    Gra mobilna na stronie, nie jest zgodna z wytycznymi dostępności stron internetowych i aplikacji mobilnych. Brak dostępności wynika z:
                </p>
                <ul className="after-p">
                    <li>geolokalizacyjnego charakteru gry, który wymaga od grającego aby ten dotarł do określonego punktu w terenie w celu uruchomienia gry i jej dalszych etapów</li>
                    <li>zadania w grze wymagają użycia urządzenia mobilnego z ekranem dotykowym i aparatem</li>
                </ul>
                <p>
                    Oświadczenie sporządzono dnia: ____<br />
                    Deklarację sporządzono na podstawie samooceny.
                </p>
                <h3>Skróty klawiszowe</h3>
                <p>
                    Na stronie internetowej można używać standardowych skrótów klawiaturowych przeglądarki.
                </p>
                <h3>Informacje zwrotne i dane kontaktowe</h3>
                <p>
                    W przypadku problemów z dostępnością strony internetowej prosimy o kontakt. Zgłoszenia kierować do Małgorzaty Basiak, mailowo - wawer.wck@um.warszawa.pl, telefonicznie – +48 22 443 70 73.<br />
                    Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać żądania zapewnienia dostępności.
                </p>
                <p className="before-list">
                    W zgłoszeniu podaj:
                </p>
                <ul className="after-p">
                    <li>swoje imię i nazwisko,</li>
                    <li>swoje dane kontaktowe (np. numer telefonu, e-mail),</li>
                </ul>
            </Box>
            <div className="button-list">
                <Link className="button" to={getHomeRoute()}>Powrót<i className="icon next" /></Link>
            </div>
        </TextPage>
        <PageFooter />
    </>
}