import Taskimg from "../img/taskImages/task2.jpg"
import useRemoveFooter from "../../../../modules/main/hooks/use-remove-footer";
import TaskIntroTemplate from "../../../../components/layout/task-intro";
import useGeoStep from "../../../../modules/game/hooks/use-geo-step";

type Props = {
    onComplete(): void
}

export default function TaskIntro({ onComplete }: Props) {
    useRemoveFooter();

    const geoPoint = useGeoStep('2.1');

    return <>
        <TaskIntroTemplate
            onComplete={onComplete}
            image={Taskimg}
            title={geoPoint?.name}
        >
            <h2>Szukajcie ukrytego</h2>
            <p>
            Ta furtka prowadzi donikąd, za nią nie ma domu ani ogrodu. Stoi samotnie przy ulicy, a za nią jest tylko las. Napis na portalu mimo upływu lat wciąż jest czytelny. Przeczytajcie go i ostrożnie przejdźcie przez drogę do lasu za furtką.<br />
                Istnienie budynku potwierdzają wspomnienia, jednak nie zawsze znamy ich źródło. Według jednych była to piętrowa budowla, a posesję ogradzały metalowa siatka i żywopłot. We wspomnieniach innych mieszkańców pozostał jednak obraz zabudowy parterowej z dekoracyjnym drewnianym płotem. Opowieści dotyczące budynku nie są nawet zgodne co do tego, czy był drewniany, czy murowany. Zgadza się tylko jedno: willa została po wojnie rozebrana przez okolicznych mieszkańców. Jednak to, czy pozyskano w ten sposób cegły do budowy okolicznych domów, czy też drewno na opał – pozostanie zagadką.<br />
                Rozejrzyjcie się, spróbujcie wyobrazić sobie, jak wyglądał ogród. Jak duży jest to obszar? Które drzewa mogą mieć blisko sto lat i być niemymi świadkami tamtych czasów? Czy gdyby nie furtka, domyślilibyście się, że kiedyś była tu willa? Czy wskazuje na to coś jeszcze? Szukanie takich śladów wymaga często nie lada spostrzegawczości.
            </p>
            <p>
                Przejdźcie do zadania i sprawdźcie się, szukając ptaków ukrytych na kartce z Drohobycza, rodzinnej miejscowości Brunona Schulza.
            </p>

        </TaskIntroTemplate>
    </>
}
