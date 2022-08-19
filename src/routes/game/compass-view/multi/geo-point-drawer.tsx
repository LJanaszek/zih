import styled from "styled-components";
import { GeoStep } from "../../../../modules/game/types";
import useCompassView from "../../../../modules/game/view-hooks/use-compass-view";

type Props = {
    step: GeoStep | null;
    isOpen: boolean;
    onToggleClicked(): void
}

const Container = styled.div<{ isOpen: boolean }>`
    background: var(--color1);
    color: var(--color2);

    position: absolute;
    left:0;
    right: 0;
    bottom: 0;

    height: ${({isOpen}) => {return isOpen ? 'auto' : '100%'}};

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        display: ${({isOpen}) => {return isOpen ? 'block' : 'none'}};
    }

    .toggle-button {
        transition: .3s;

        transform: rotate(${({isOpen}) => {return isOpen ? 0 : '180deg'}});
    }


`;

export default function GeoPointDrawer({ step, isOpen, onToggleClicked }: Props) {



    return <Container isOpen={isOpen}>
        <button className="toggle-button" onClick={onToggleClicked}>A</button>
        {!step && <p>Zaznacz na mapie punkt którego szukasz</p>}
        {step && <StepInfo step={step} />}
    </Container>
}


function StepInfo({ step }: { step: GeoStep }) {
    const { isAccuracyOk, error, points } = useCompassView([step]);

    const distance = points[0].distance | 0;

    return <p>
        Jesteś w odległości {distance} od {step.name}
    </p>
}
