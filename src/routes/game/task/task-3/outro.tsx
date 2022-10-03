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
            <h2>Schulz w pamięci uczniów</h2>
            <p>
                Współcześnie postać Schulza możemy poznawać na przykład ze wspomnień jego uczniów, które zgromadził Wiesław Budzyński. Dowiadujemy się z nich między innymi, że drobnej budowy artysta często siadał w ławkach razem z młodzieżą, chcąc zmniejszyć dystans w relacjach z podopiecznymi.<br />
                W trakcie zajęć opowiadał wymyślone przez siebie bajki, poruszając się nerwowo, a jednocześnie utrzymując spokojny ton głosu. Mimo drobnej budowy i wycofania, gdy zaczynał opowiadać o interesujących go tematach, urastał w oczach słuchających i przykuwał ich uwagę, nabierał intensywności, której na co dzień unikał.<br />
                Zmagał się z chorobą płuc i problemami psychicznymi, co powodowało jego częste nieobecności w pracy. Na wielu uczniach wywarł jednak niezapomniane wrażenie. Nawet po wielu latach pamiętali jego chód, ton głosu, sposób bycia.
            </p>
        </Box>
        <div className="button-list">
            <button className="button" onClick={onComplete}>Kontynuuj grę<i className="icon next" /></button>
        </div>
    </TextPage>
}
