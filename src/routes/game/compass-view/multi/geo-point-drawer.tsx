import styled from "styled-components";
import { GeoStep } from "../../../../modules/game/types";
import useCompassView from "../../../../modules/game/view-hooks/use-compass-view";
import arrowSrc from './arrow.svg';

type Props = {
    step: GeoStep | null;
    isOpen: boolean;
    onToggleClicked(): void
}

const Container = styled.div<{ isOpen: boolean }>`
    background: var(--color1);
    color: white;

    position: absolute;
    left:0;
    right: 0;
    bottom: 0;

    height: ${({ isOpen }) => { return isOpen ? 'auto' : '3em' }};

    padding: 1em 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 3em 3em 0 0;

    .head {
        height: 3.5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toggle-button {
        transition: .3s;
        height: 80%;

        transform: rotate(${({ isOpen }) => { return !isOpen ? 0 : '180deg' }});
    }

    .content {
        display: ${({ isOpen }) => { return isOpen ? 'block' : 'none' }};
        padding: 2em 0;
    }
`;

export default function GeoPointDrawer({ step, isOpen, onToggleClicked }: Props) {



    return <Container isOpen={isOpen}>
        <div className="head">
            <input type='image' alt="Otwórzy info" src={arrowSrc} className="toggle-button" onClick={onToggleClicked} />
        </div>
        <div className="content">
            {!step && <p>Zaznacz na mapie punkt którego szukasz</p>}
            {step && <StepInfo step={step} />}
        </div>
    </Container>
}


function StepInfo({ step }: { step: GeoStep }) {
    const { points } = useCompassView([step]);

    const distance = points[0].distance | 0;

    return <p>
        Jesteś w odległości {distance} od {step.name}
    </p>
}
