import { useMemo, useState } from "react";
import Taskimg from "../img/taskImages/task1.jpg";
import TaskPopup from "../../../../components/elements/task-popup";
import TaskIntroTemplate from "../../../../components/layout/task-intro";
import useGeoStep from "../../../../modules/game/hooks/use-geo-step";

type Props = {
    onComplete(): void
}

export default function TaskIntro({ onComplete }: Props) {

    const [showGPSInfo, setShowGPSInfo] = useState(false);

    const addButtons = useMemo(() => {
        return [
            <button className="button" onClick={() => { setShowGPSInfo(true) }}>Pomoc <i className="icon help" /></button>
        ]
    }, [setShowGPSInfo])

    const geoPoint = useGeoStep('1.1');

    return <>
        <TaskIntroTemplate
            onComplete={onComplete}
            image={Taskimg}
            title={geoPoint?.name}
            addButtons={addButtons}
        >
            <h2>Spójrzcie na dawną ulicę Handlową</h2>

            <p>
                Spróbujcie wyobrazić sobie, że znajdujecie się na ulicy Handlowej sto lat temu. Jesteście na wąskiej, brukowanej uliczce. Po obu stronach znajdują się dwupiętrowe drewniane domy. Witryny sklepów i zakładów na parterze opatrzone są kolorowymi, ale prostymi szyldami, znad których wystają zdobione balustrady balkonów.<br />
                Spacerując, mijacie piekarnię, sklepy z nabiałem, owocami, ciepłą odzieżą, sklep kolonialny, pasmanteryjny, żelazny i z fajansem, skład apteczny, zakłady rzeźnicze, zakład blacharski, a także fryzjera i słynną w miasteczku restaurację Melecha Gurfinkela, w której robotnicy, rzemieślnicy, inteligencja i przyjezdni mogli się najeść do syta. Zatrzymujecie się przy zakładzie zegarmistrzowskim i złotniczym Icchoka Ringa, przed którym na stojaku wisi wielki zegar. Abram Ring, syn Icchoka, wspomina ów zegar w poemacie.
            </p>
            <figure>
                <blockquote>
                    <p>
                        Przy żydowskiej ulicy Handlowej<br />
                        Na żelaznym uchwycie<br />
                        Wisi zegar mojego ojca,<br />
                        Kołysze się, płacze i tęskni…
                    </p>
                </blockquote>
                <figcaption>Zegar mojego ojca, Abram Ring</figcaption>
            </figure>
            <p>
                Ulicą przemykają mieszkańcy załatwiający swoje sprawy. Wszyscy się znają, więc często słychać powitania i pogawędki. W powietrzu czuć zapach świeżego pieczywa i restauracyjnej kuchni. Właśnie rusza pociąg z nieodległej stacji, jego gwizd i szum kół przez chwilę dominuje nad zgiełkiem rozmów i stukotu butów na bruku.
            </p>
            <p>
                Uruchomcie zadanie i korzystając z wirtualnej nakładki, spójrzcie, jak kiedyś wyglądała ulica Handlowa. Czy wasze wyobrażenie było podobne? Możecie sobie wykonać pamiątkowe zdjęcie.
            </p>
        </TaskIntroTemplate>
        {showGPSInfo && <TaskPopup onClick={() => { setShowGPSInfo(false) }}>
            <p>
                Gra wykorzystuje technologię rozszerzonej rzeczywistości. <br />
                Jeśli chcesz wykonać to zadanie, prosimy, wyraź zgodę na dostęp do kamery.
            </p>
        </TaskPopup>}
    </>
}
