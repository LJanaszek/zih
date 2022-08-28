import { useState } from "react";
import styled from "styled-components";
import TaskPopup from "../../../../components/elements/task-popup";
import SmallPageHeader from "../../../../components/layout/header/small-header";
import Puzzle from "../../../../components/task-widgets/puzzle/puzzle";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import previewSrc from './img/preview.png';

type Props = {
    onComplete(): void
}

const Container = styled.div`
    display: grid;

    @media (orientation: landscape) {
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 1fr;

        .left-column {
            grid-column: 1;
            vertical-align: top;
        }

        .right-column {
            grid-column: 3;
            padding: .5rem;

            display: flex;
            flex-direction: column;

            justify-content: center;

            .button {
                margin: .2em 0;
            }
        }
    }

@media (orientation: portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;

    .left-column {
        grid-column: 1;
        grid-row: 1;
    }

    .widget-container {
        grid-row: 2;
    }

    .right-column {
        grid-row: 3;
        padding: .5rem;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        .button {
            margin: .2em 0;
        }
    }
}
`;

export default function TaskMain({ onComplete }: Props) {
    useRemoveHeader();

    const [showPreview, setShowPreview] = useState(false);
    const [showComplete, setShowComplete] = useState(false);

    return <Container>
        <div className="left-column">
            <div className="header-container">
                <SmallPageHeader />
            </div>
        </div>
        <div className="widget-container">
            <Puzzle onComplete={() => setShowComplete(true)} />
        </div>
        <div className="right-column">
            <button className="button" onClick={() => { setShowPreview(true) }}>Pomoc<i className="icon help" /></button>
            {/* <button className="button" onClick={onComplete}>Restart<i className="icon restart" /></button> */}
            {showComplete && <button className="button" onClick={onComplete}>Zakończ<i className="icon ok" /></button>}
        </div>
        {
            showPreview && <TaskPopup onClick={() => { setShowPreview(false) }}>
                <img src={previewSrc} alt="" />
            </TaskPopup>
        }

    </Container>
}
