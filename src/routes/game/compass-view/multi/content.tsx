import { useMemo } from "react";
import styled from "styled-components";
import { GeoStep } from "../../../../modules/game/types";
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

    const points = useMemo(() => {
        return {
            active: geoSteps.map(g => g.id),
            inactive: []
        }
    }, [geoSteps])

    return <Container>
        <MapComponent
            onPointerClicked={onPointClicked}
            points={points}
            activePoint={activePoint}
        />
    </Container>
}
