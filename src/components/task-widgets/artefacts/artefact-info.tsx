import { useMemo } from "react";
import WIDGET_DATA from "./data";

type Props = {
    artefactId: string,
    onClose(): void
}

export default function ArtefactInfo({ artefactId, onClose }: Props) {
    const artefact = useMemo(() => {
        return WIDGET_DATA.ITEMS.find(a => a.id === artefactId);
    }, [artefactId])

    return <div>
        <button onClick={onClose}>Zamknij</button>
        {artefact && <>
            <h3>{artefact.name}</h3>
            <p>{artefact.description}</p>
        </>}
    </div>
}
