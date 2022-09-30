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
            <h2>Przygotowanie do podróży</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus alias quia asperiores natus iusto, pariatur ab provident officiis veniam culpa, distinctio consequatur accusamus, porro autem itaque omnis et? Repellendus, velit?</p>
        </TaskIntroTemplate>
    </>
}
