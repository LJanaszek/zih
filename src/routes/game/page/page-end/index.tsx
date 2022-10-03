import Box from "../../../../components/layout/box";
import end from "./end.jpg";
import PageFooter from '../../../../components/layout/footer';
import TextPage from "../../../../components/layout/text-page";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";
;

type Props = {
    onNext(): void
}

export default function PageEnd({ onNext }: Props) {
    return <>
        <TextPage>
            <ScrollToTop />
            <h2>Zakończenie</h2>
            <img className="photo" src={end} alt="" style={{ width: '100%' }} />
            <Box>
                <div className="content">
                    <h3 className="header-content">Wspomnienie</h3>
                    <p>
                        Tu kończymy tę wędrówkę przez miejsca i historie, fakty i niewyraźne wspomnienia. Prowadził Was przez nią duch Brunona Schulza, zawarty w jego twórczości i listach. Żegnamy się w miejscu symbolicznym, w którym jedne podróże się kończą, a inne zaczynają. Dzięki kolei Falenica rozkwitła. To także stąd wyruszyła w ostatnią podróż znaczna część jej mieszkańców. Zatrzymajcie się na chwilę i ich wspomnijcie.<br />
                        Pomyślcie, co szczególnie przykuło waszą uwagę. Zastanówcie się czemu. Macie wspomnienia, które pragnęliście zachować, ale stają się one coraz mniej wyraźne? Co mogłoby sprawić, by przetrwały one sto lat i budziły ciekawość przyszłych pokoleń, podobnie jak życie dawnej Falenicy i tajemnicza postać Brunona Schulza?
                    </p>
                </div>
            </Box>
            <nav className="button-list actions">
                <button onClick={onNext} className="button">Koniec<i className="icon next" /></button>
            </nav>
        </TextPage>
        <PageFooter />
    </>

}
