import styled from "styled-components"
import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header"
import ArtefactsWidget from "../../../../components/task-widgets/artefacts"
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header"

type Props = {
    onComplete(): void
}

const Cointainer = styled.div`
    .widget {
        flex-grow: 1;
    }
`;

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    return <Cointainer>
        <FillScreenWithHeader>
                <div className="widget">
                    <ArtefactsWidget onComplete={() => { }} />
                </div>
                <div className="buttons">
                    <button className="button" onClick={() => { }}>Pomoc<i className="icon help" /></button>
                    <button className="button" onClick={onComplete}>Zakończ<i className="icon ok" /></button>
                </div>
        </FillScreenWithHeader>
    </Cointainer>
}
