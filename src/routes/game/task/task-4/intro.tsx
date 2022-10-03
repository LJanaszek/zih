import Taskimg from "../img/taskImages/task4.jpg"
import useRemoveFooter from "../../../../modules/main/hooks/use-remove-footer";
import TaskIntroTemplate from "../../../../components/layout/task-intro";
import useGeoStep from "../../../../modules/game/hooks/use-geo-step";


type Props = {
    onComplete(): void
}

export default function TaskIntro({ onComplete }: Props) {
    useRemoveFooter()

    const geoPoint = useGeoStep('4.1');

    return <>
        <TaskIntroTemplate
            onComplete={onComplete}
            image={Taskimg}
            title={geoPoint?.name}
        >
            <h2>Miejsce modlitwy i spotkań</h2>
            <p>
                Przyczynę nietypowej architektury tego budynku zdradzają jedynie łukowate okna na parterze, dalekie od standardów budynków mieszkalnych.
                Synagoga, czyli dom modlitwy. Najważniejsza dla religijnych Żydów, ale jako główne miejsce zebrań ważna także dla niepraktykujących. Synagoga w Falenicy była reformowana i przyjmowała reprezentantów wszystkich odmian judaizmu. Jej fundator planował utworzenie szkoły i rozwinięcie działalności charytatywnej instytucji. Plany te pokrzyżowała wojna, która wybuchła zaledwie rok po oddaniu budynku do użytku.<br />
                W trakcie wojny budynek służył za improwizowany szpital, jadłodajnię i miejsce spotkań społeczności getta. Po wojnie został przebudowany na lokale użytkowe i mieszkalne. W dawnych przestrzeniach synagogi szkoliły się kasjerki WSS, działał hotel dla ekspedientek i funkcjonował sklep spożywczy.<br />
                Nie zachowały się żadne zdjęcia wnętrza i – poza wspomnianymi oknami – nic nie wskazuje na dawne przeznaczenie tej budowli.
                Jakie znacie przedmioty, zwyczaje czy elementy architektoniczne charakterystyczne dla kultury żydowskiej?
            </p>
            <p>
                Uruchomice zadanie i spróbujcie dopasować nazwy do przedmiotów.
            </p>
        </TaskIntroTemplate>
    </>
}
