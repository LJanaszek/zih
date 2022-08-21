import { useMemo } from "react";
import WIDGET_DATA from "./data";

type Props = {
    artefactId: string,
    onClose(): void
}

export default function ArtefactInfo({ artefactId, onClose }: Props) {
    const [artefact, artIndex] = useMemo(() => {
        const index = WIDGET_DATA.ITEMS.findIndex(a => a.id === artefactId);

        return [WIDGET_DATA.ITEMS[index], index]
    }, [artefactId])

    return <div>
        <button onClick={onClose}>Zamknij</button>
        <h3>{artefact.name}</h3>
        <p>{artefact.description}</p>
    </div>
}
