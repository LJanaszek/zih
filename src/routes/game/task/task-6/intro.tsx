import Taskimg from "../img/taskImages/task6.jpg"
import useRemoveFooter from "../../../../modules/main/hooks/use-remove-footer";
import TaskIntroTemplate from "../../../../components/layout/task-intro";
import useGeoStep from "../../../../modules/game/hooks/use-geo-step";

type Props = {
    onComplete(): void
}

export default function TaskIntro({ onComplete }: Props) {
    useRemoveFooter()

    const geoPoint = useGeoStep('6.1');

    return <>
        <TaskIntroTemplate
            onComplete={onComplete}
            image={Taskimg}
            title={geoPoint?.name}
        >
            <h2>Getto w Falenicy</h2>
            <p>
                Ten pęknięty kamień upamiętnia rocznicę likwidacji getta w Falenicy. W wyniku decyzji okupantów powstało, a następnie stopniowo było likwidowane getto skupiające życie społeczności żydowskiej w coraz węższych ramach. Tysiące istnień związanych z tym miastem, jego historią i społecznością pochłonął ogień wojny i Holokaustu.<br />
                Łącznie przez getto w Falenicy przeszło 7500 osób – tych żyjących tu od dawna, a także mieszkańców innych miejscowości, których przesiedlono. Życie na terenie getta było ciężkie, wiązało się z brakiem jedzenia, ciepła i opieki medycznej, co skutkowało wyniszczającymi chorobami. Polacy żyjący poza gettem próbowali pomagać, ale wiązało się to z ryzykiem trafienia do aresztu lub śmierci. Spośród wszystkich, którzy tu trafili, wojnę przeżyło kilkanaście osób.
            </p>
            <figure>
                <blockquote>
                    <p>
                        Nie mieli pogrzebów. Nie było żałoby. Nie miał ich kto opłakiwać. Pozostało jedno – pamiętać o tym, co przeszli, co się z nimi stało.
                    </p>
                </blockquote>
                <figcaption>Stanisław Krajewski, „Kurier Wawerski” 2012, nr 11</figcaption>
            </figure>
            <p>
                Przed wami zadanie. Ułóżcie fragmenty fresku namalowanego przez Brunona Schulza w czasie, gdy był przetrzymywany w getcie w Drohobyczu.
            </p>
        </TaskIntroTemplate>
    </>
}
