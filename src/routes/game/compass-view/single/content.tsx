import styled from "styled-components";
import Box from "../../../../components/layout/box";
import { GeoStep } from "../../../../modules/game/types";
import useCompassView from "../../../../modules/game/view-hooks/use-compass-view";
import { GEO_MODULE_ERROR } from "../../../../modules/geo";
import AccuracyError from "../accuracy-error";
import GeoInfo from "../geo-info";



const Container = styled.div`
    .sponsor {
        font-size: .8em;
        text-align: center;

        display: flex;
        flex-direction: column;

        max-width: 80vh;
        margin: 0 auto;

        &>* {
            margin: 1.5em auto;
        }

        img.mazowsze {
            width: 350px;
            max-width: 100%;
        }

        img.raszyn {
            width: 100px;
            max-width: 100%;
        }
    }
`

export default function CompassViewContent({ step }: { step: GeoStep }) {

    const { isAccuracyOk, error, closestPoint } = useCompassView([step]);
    const { distance, bearing } = closestPoint;
    const name = closestPoint.point.name;

    const showPermitionError = error?.type === GEO_MODULE_ERROR.PERMISSION_DENIED;
    const showAccuracyError = !isAccuracyOk && !error;
    const showGeoInfo = isAccuracyOk && !error;

    return <Container>
        {showPermitionError && <Box>
            <h3>Błąd uprawnień.</h3>
            <p>Gra nie uzyskała dostępu do lokalizacji urządzenia. <br />Przyznaj uprawnienia stronie z grą, a następnie odśwież stronę.</p>
        </Box>}
        {showAccuracyError && <AccuracyError />}
        {showGeoInfo && <GeoInfo bering={bearing} name={name} distance={distance} />}
    </Container>
}
