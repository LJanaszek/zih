import styled from "styled-components";
import Box from "../../../../components/layout/box";
import { GeoStep } from "../../../../modules/game/types";
import useCompassView from "../../../../modules/game/view-hooks/use-compass-view";
import { GEO_MODULE_ERROR } from "../../../../modules/geo";
import AccuracyError from "../accuracy-error";
import GeoInfo from "../geo-info";

const Container = styled.div`
`

type Props = {
    onPointClicked(id: string): void,
    geoSteps: GeoStep[]
}

export default function MultiPointCompassViewContent({ geoSteps, onPointClicked }: Props) {

    const { isAccuracyOk, error, points } = useCompassView(geoSteps);

    const showPermitionError = error?.type === GEO_MODULE_ERROR.PERMISSION_DENIED;
    const showAccuracyError = !isAccuracyOk && !error;
    const showGeoInfo = isAccuracyOk && !error;

    return <Container>
        {showPermitionError && <Box>
            <h3>Błąd uprawnień.</h3>
            <p>Gra nie uzyskała dostępu do lokalizacji urządzenia. <br />Przyznaj uprawnienia stronie z grą, a następnie odśwież stronę.</p>
        </Box>}
        {showAccuracyError && <AccuracyError />}
        {showGeoInfo && points.map(point => {
            // return <GeoInfo key={point.point.id} bering={point.bearing} name={point.point.name} distance={point.distance} />
            return <button onClick={() => {onPointClicked(point.point.id)}}>{point.point.name}</button>
        })

        }

    </Container>
}
