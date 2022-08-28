import { useState } from "react";
import styled from "styled-components";
import Popup from "../../../../components/elements/popup";
import TaskPopup from "../../../../components/elements/task-popup";
import FillScreenWithHeader from "../../../../components/layout/fill-screen-with-header";
import SmallPageHeader from "../../../../components/layout/header/small-header";
import BirdsTask, { BirdTaskState } from "../../../../components/task-widgets/birds";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import HelpGrid from "./help-grid";

type Props = {
    onComplete(): void
}

const Container = styled.div`
    width: 100%;
    display: grid;

    .state {
        text-align: center;
    }

    @media(orientation: landscape) {
        height: 100vh;
        grid-template-columns: min-content auto min-content;
        /* grid-template-columns: 26fr 60fr 14fr; */
        grid-template-rows: 1fr 1fr 1fr;
        /* gap: 10px; */

        .header {
            grid-column: 1;
        }

        .controlls {
            grid-column: 1;
            grid-row: 2;

            display: flex;
            flex-direction: column;

            .button {
                margin: 5px 1em;
                width: calc(100% - 2em);
            }
        }

        .widget {
            position: relative;

            grid-column: 2;
            grid-row: 1/4;

            align-self: stretch;
            justify-self: stretch;
        }

        .state {
            font-size: 2rem;
            padding-top: .1em;
            span {
                display: inline-block;
                min-width: 2.5em;
            }
        }
    }

    @media(orientation: portrait) {
        height: 100vh;
        grid-template-columns: 1fr;
        gap: 10px;

        .header {
            grid-row: 1;
        }

        .controlls {
            grid-row: 4;

            display: flex;
            flex-direction: column;

            .button {
                margin: 5px auto;
                width: 90%;
            }
        }

        .state {
            grid-row: 3;
            font-size: 2rem;
        }


        .widget {
            position: relative;

            grid-row: 2;

            padding-top: 74%;
        }
    }
`;

export default function TaskMain({ onComplete }: Props) {

    useRemoveHeader();

    const [gameState, setGameState] = useState<BirdTaskState>({
        birdCount: 0,
        findedBirdCount: 0,
        isComplete: false
    });

    const [showInfoPopup, setShowInfoPopup] = useState(false);
    const [showPreviewPopup, setShowPreviewPopup] = useState(false);

    return <>
        <Container>
            <div className="header">
                <SmallPageHeader />
            </div>
            <div className="controlls">
                <button className="button" onClick={() => { setShowPreviewPopup(true) }}>Podgląd<i className="icon eye" /></button>
                <button className="button" onClick={() => { setShowInfoPopup(true) }}>Pomoc<i className="icon help" /></button>
                {gameState.isComplete && <button className="button" onClick={onComplete}>Zakończ<i className="icon ok" /></button>}
            </div>
            <div className="widget">
                <BirdsTask onComplete={onComplete} onGameStateChanged={setGameState} />
            </div>
            <div className="state">
                <span>{gameState.findedBirdCount}/{gameState.birdCount}</span>
            </div>
        </Container>
        {showPreviewPopup && <Popup padding="small" onClick={() => { setShowPreviewPopup(false) }}>
            <HelpGrid />
        </Popup>}
        {showInfoPopup && <TaskPopup onClick={() => { setShowInfoPopup(false) }}>
            Znajdź ukryte ptaki i kliknij w nie by je złapać. Kliknij w ikonę [oko] by zobaczyć podpowiedź.
        </TaskPopup>}
    </>
}
