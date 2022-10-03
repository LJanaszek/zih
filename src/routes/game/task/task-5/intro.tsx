import Taskimg from "../img/taskImages/task5.jpg"
import useRemoveFooter from "../../../../modules/main/hooks/use-remove-footer";
import TaskIntroTemplate from "../../../../components/layout/task-intro";
import useGeoStep from "../../../../modules/game/hooks/use-geo-step";

type Props = {
    onComplete(): void
}

export default function TaskIntro({ onComplete }: Props) {
    useRemoveFooter()

    const geoPoint = useGeoStep('5.1');

    return <>
        <TaskIntroTemplate
            onComplete={onComplete}
            image={Taskimg}
            title={geoPoint?.name}
        >
            <h2>Ciuchcia</h2>
            <p>
                To tutaj zatrzymywała się kiedyś legendarna „ciuchcia”, czyli małoformatowa lokomotywa opalana węglem. „Pędziła” ona na trasie prowadzącej wzdłuż Wisły. Rozbudowa linii kolejowych z Warszawy w tym kierunku znacznie przyczyniła się do rozwoju okolicy. Ułatwiła transport materiałów budowlanych do rosnących jak grzyby po deszczu willi. Z czasem zarówno mieszkańcy, jak i letnicy przyzwyczaili się do tego środka lokomocji. Ruch pasażerski zwiększył się w dwudziestoleciu międzywojennym, co ograniczyło plany likwidacji linii. W efekcie kolejka przetrwała aż do lat 50.<br />
                Do dziś pozostały pojedyncze budynki, nasyp na terenie Skaryszewa, most na Świdrze i układ wawerskich ulic powiązany z przebiegiem torów. Dzięki „ciuchci” Wawer, Falenica i Otwock szybko stały się ważnymi miejscami wypraw weekendowych i letniskowych, a tworząca się tu infrastruktura mogła czerpać zasoby z oddalonych magazynów.<br />
                Niegdyś sama podróż kolejką była nie lada atrakcją. Z czasem jednak, ze względu na jej powszechność, stała się jedynie etapem na drodze do celu.
            </p>
            <p>
                Przejdźcie do zadania i rozglądając się wokół, spróbujcie znaleźć wszystkich podróżnych czekających na pociąg.
            </p>
        </TaskIntroTemplate>
    </>
}
