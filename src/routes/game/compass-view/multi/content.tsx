import { useMemo } from "react";
import styled from "styled-components";
import Box from "../../../../components/layout/box";
import { GeoStep } from "../../../../modules/game/types";
import useCompassView from "../../../../modules/game/view-hooks/use-compass-view";
import { GEO_MODULE_ERROR } from "../../../../modules/geo";
import AccuracyError from "../accuracy-error";
import MapComponent from "./map";

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

type Props = {
    onPointClicked(id: string): void,
    geoSteps: GeoStep[],
    activePoint?: string
}

export default function MultiPointCompassViewContent({ geoSteps, onPointClicked, activePoint }: Props) {

    const { isAccuracyOk, error } = useCompassView(geoSteps);

    const showPermitionError = error?.type === GEO_MODULE_ERROR.PERMISSION_DENIED;
    const showAccuracyError = !isAccuracyOk && !error;
    const showGeoInfo = isAccuracyOk && !error;

    const points = useMemo(() => {
        return {
                active: geoSteps.map(g => g.id),
                inactive: []
            }
    }, [geoSteps])

    return <Container>
        {showPermitionError && <Box>
            <h3>Błąd uprawnień.</h3>
            <p>Gra nie uzyskała dostępu do lokalizacji urządzenia. <br />Przyznaj uprawnienia stronie z grą, a następnie odśwież stronę.</p>
        </Box>}
        {showAccuracyError && <AccuracyError />}

        {showGeoInfo && <MapComponent
            onPointerClicked={onPointClicked}
            points={points}
            activePoint={activePoint}
        />}


    </Container>
}
