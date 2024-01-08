import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import stern from "../../../../assets/stern.png"
import Page92Widget2 from "./widget-2"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
        <img className='page-img' src={stern} alt="" />

            <p>Wyświetlą Ci się wizerunki kolejnych rzeźb. Rozejrzyj się wokół zegara słonecznego i wpisz ich nazwy. Każda jest podpisana.

            </p>
            <Page92Widget2
            relations={[
                "Super, udało Ci się!",
                "Brawo, wspaniale, gratulujemy.",
                "Oooooo, jesteśmy z Ciebie dumni, należy ci się nagroda.",
                "Widzimy, że Twoje wysiłki, praca przyniosły efekt. Jestem dumny z Twojej wytrwałości, przygotowań, pracy. Gratuluję.",
                "No to chłopie poleciałeś. Spoko, nie martw, jakoś to będzie.",
                "A nie mówiliśmy że jak nie będziesz pracował, to i wyników nie będzie.",
                "Co teraz będzie, no to możemy zapomnieć o tej szkole, o której tak marzyłeś. Musimy teraz szukać innej.",
                "I jak się czujesz z tymi wynikami? Chcesz pogadać o tym? Ja jestem gotów. Jak Ty będziesz gotów, to przyjdź. Bardzo chcielibyśmy Cię wysłuchać."
            ]}
            interpretations={[
                "To nie moja zasługa, tylko miałem szczęście. ",
                "Wiem, że mogę na nich liczyć, nawet teraz. Czuję, że komuś muszę powiedzieć jak mi teraz jest źle. Dobrze, że chcą mnie wysłuchać. ",
                "Jak zwykle nawaliłem, wiedzieli, że tak będzie i nawet nie są zaskoczeni.",
                "Fajnie, cieszą się.",
                "Widzą moją pracę, potrafią wskazać dokładnie za co są dumni. Czuję, że to jest prawdziwe.",
                "A czy gdybym miał inny wynik, bylibyście dumni, dostałbym nagrodę?",
                "Wszystkich zawiodłem i jeszcze zrobiłem problemy, teraz nie dość, że mają dużo swoich spraw, to jeszcze będą martwić się moją szkołą. Przegryw ze mnie.",
                "No i wyszło na ich, mieli rację. Jestem do niczego, zawiodłem ich."
            ]}
        />

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
