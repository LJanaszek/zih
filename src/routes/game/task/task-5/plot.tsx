import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import Zimg from "../img/Z.svg";
import CluePage from "../../../../components/layout/clue-page";
import useGeoStep from "../../../../modules/game/hooks/use-geo-step";

type Props = {
    onComplete(): void
}

export default function TaskPlot({onComplete}: Props) {
    useRemoveHeader();

    const step = useGeoStep('5.1');

    return <>
        {step && <CluePage
            step={step}
            onComplete={onComplete}
            clueImg={Zimg}
        />}
    </>
}
