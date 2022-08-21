import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import Jimg from "../img/J.svg";
import CluePage from "../../../../components/layout/clue-page";
import useGeoStep from "../../../../modules/game/hooks/use-geo-step";


type Props = {
    onComplete(): void
}

export default function TaskPlot({ onComplete }: Props) {
    useRemoveHeader();

    const step = useGeoStep('6.1');

    return <>

        {step && <CluePage
            step={step}
            onComplete={onComplete}
            clueImg={Jimg}
        />}
    </>
}
