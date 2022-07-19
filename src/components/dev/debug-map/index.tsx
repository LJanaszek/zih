import { useEffect } from "react";
import styled from "styled-components";
import { useGameModuleState } from "../../../modules/game";
import { GAME_STEP_TYPE, GeoStep } from "../../../modules/game/types";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    #map-container {
        width: 100vw;
        height: 100vh;
    }

    .close {
        position: absolute;
        top: 0;
        left: 0;
    }
`;

type Props = {
    onClose: () => void
}

export default function DebugMap({onClose}: Props) {

    const {scenario} = useGameModuleState();
    const geoPoints = scenario.steps.filter(s => s.type === GAME_STEP_TYPE.GEO_STEP) as GeoStep[];

    useEffect(() => {
        const id = setTimeout(() => {
            const map = new google.maps.Map(document.getElementById("map-container") as HTMLElement, {
                center: geoPoints[0].position,
                zoom: 15,
              });

              geoPoints.forEach(p => {
                  new google.maps.Marker({
                    position: p.position,
                    map,
                    title: p.name.join(' '),
                  });
              })

        }, 500);

        return () => {
            clearTimeout(id);
        }
    }, [geoPoints]);

    return <Container>
        <div id="map-container"></div>
        <button className="close" onClick={onClose}>ZAMKNIJ</button>
    </Container>
}
