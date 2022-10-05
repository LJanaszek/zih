import Taskimg from "../img/taskImages/task3.jpg"
import useRemoveFooter from "../../../../modules/main/hooks/use-remove-footer";
import TaskIntroTemplate from "../../../../components/layout/task-intro";
import useGeoStep from "../../../../modules/game/hooks/use-geo-step";

type Props = {
    onComplete(): void
}

export default function TaskIntro({ onComplete }: Props) {
    useRemoveFooter();

    const geoPoint = useGeoStep('3.1');


    return <>
        <TaskIntroTemplate
            onComplete={onComplete}
            image={Taskimg}
            title={geoPoint?.name}
        >
            <h2>Tu było Sanatorium</h2>
            <p>
                Na tym terenie znajdowało się Sanatorium Dziecięce im. W. Medema, nad którym pieczę sprawowała Centralna Żydowska Organizacja Szkolna. Patronem sanatorium był czołowy działacz Bundu (Ogólnożydowskiego Związku Robotniczego), jeden z inicjatorów i organizatorów żydowskiego szkolnictwa, aktywnie działający na polu kulturalno-oświatowym.<br />
                Idea budowy ośrodka zrodziła się w wyniku chęci pomocy setki dzieciom z żydowskich szkół robotniczych cierpiących na suchoty. Pacjentami zostawały jednak tylko dzieci w lekkim, początkowym stadium gruźlicy, a pobyt w sanatorium miał na celu zapobiec dalszemu rozwojowi choroby.<br />
                Oprócz zabiegów medycznych lecznica zapewniała zajęcia dydaktyczne. Młodzi kuracjusze grali, śpiewali, tańczyli, rysowali, występowali, bawili się. W ośrodku znajdowały się pracownia biologiczna, ogród, sad, szklarnia, stacja meteorologiczna oraz hodowla małych zwierząt (kur, królików i gołębi). Wydawano gazetę ścienną oraz codzienną gazetę o nazwie „Nasze Radio”, która była odczytywana na żywo.<br />
                Kluczowym elementem wychowawczym był jednak element samorządności. Co tydzień odbywały się spotkania zgromadzenia ogólnego, które co 10 tygodni wybierało radę dzieci. Rada przeprowadzała głosowania, wydawała uchwały, wybierała komisje do wszelkich zadań, takich jak podawanie do stołu, picie mleka, czyszczenie obuwia, obsługa biblioteki, redakcja „Naszego Radia”, dbanie o kurnik czy przyjmowanie gości.
            </p>
            <p>
                Przed Wami zadanie. Zapoznajcie się z różnymi zadaniami komisji i spróbujcie przydzielić je do odpowiednich kategorii: gospodarstwo, higiena, koło pracy kulturalnej i koło przyrodnicze.
            </p>

        </TaskIntroTemplate>
    </>
}
