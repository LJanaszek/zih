import { GeoModuleProvider } from "../../../../modules/geo"
import CompassDebugTools from "../../../../components/dev/compass-debug-tools"
import { useConfigModuleState } from "../../../../modules/config"
import ScrollToMe from "../../../../utils/widgets/scroll-to-me"
import useGeoStep from "../../../../modules/game/hooks/use-geo-step"
import GameErrorPage from "../../error"
import CompassViewContent from "./content"

type Props = {
    pointId: string
}

export default function SingleCompassView(props: Props) {

    const { showDebug } = useConfigModuleState();
    const step = useGeoStep(props.pointId);

    return <>{step && <GeoModuleProvider>
        <ScrollToMe trigger={props.pointId} behavior="smooth" />
        <CompassViewContent step={step} />
        {showDebug && <CompassDebugTools />}
    </GeoModuleProvider>}
        {!step && <GameErrorPage />}
    </>
}
