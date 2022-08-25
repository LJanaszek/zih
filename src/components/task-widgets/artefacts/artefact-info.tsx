import { useMemo } from "react";
import WIDGET_DATA from "./data";
import closeSrc from '../../../assets/icons/close.svg';
import styled from "styled-components";

type Props = {
    artefactId: string,
    onClose(): void
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;

    .close {
        height: 2rem;
        background: none;
        border: none;
        align-self: flex-end;
        justify-self: flex-start;
    }

    h3 {
        text-align: center;
    }

    p {
        text-align: center;
    }
`

export default function ArtefactInfo({ artefactId, onClose }: Props) {
    const artefact = useMemo(() => {
        return WIDGET_DATA.ITEMS.find(a => a.id === artefactId);
    }, [artefactId])

    return <Container>
        <input type='image' src={closeSrc} className="close" onClick={onClose} />
        {artefact && <>
            <h3>{artefact.name}</h3>
            <p>{artefact.description}</p>
        </>}
    </Container>
}
