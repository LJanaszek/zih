import { useState } from "react";
import styled from "styled-components";
import Popup from "../../../../components/elements/popup";
import TaskPopup from "../../../../components/elements/task-popup";
import SmallPageHeader from "../../../../components/layout/header/small-header";
import BirdsTask, { BirdTaskState } from "../../../../components/task-widgets/birds";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";
import EyeIconSrc from '../../../../assets/icons/eye.svg';

type Props = {
    onNext(): void
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

        .button {
            font-size: 1rem;
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
            align-items: center;
            justify-content: center;
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

export default function TaskMain({ onNext }: Props) {

    // useRemoveHeader();

    const [gameState, setGameState] = useState<BirdTaskState>({
        birdCount: 0,
        findedBirdCount: 0,
        isComplete: false
    });

    const [showInfoPopup, setShowInfoPopup] = useState(false);
    const [showPreviewPopup, setShowPreviewPopup] = useState(false);

    return <>
        <ScrollToTop />
        <Container>
            {/* <div className="header">
                <SmallPageHeader />
            </div> */}
            <div className="controlls button-list hide-in-portrait">
                {/* <button className="button only-icon" onClick={() => { setShowPreviewPopup(true) }}><i className="icon eye" /></button> */}
                {!gameState.isComplete && <button className="button only-icon" onClick={() => { setShowInfoPopup(true) }}><i className="icon help" /></button>}
                {gameState.isComplete && <button className="button only-icon" onClick={onNext}><i className="icon ok" /></button>}
            </div>
            <div className="controlls button-list hide-in-landscape">
                {/* <button className="button" onClick={() => { setShowPreviewPopup(true) }}>Podgląd<i className="icon eye" /></button> */}
                {!gameState.isComplete && <button className="button" onClick={() => { setShowInfoPopup(true) }}>Pomoc<i className="icon help" /></button>}
                {gameState.isComplete && <button className="button" onClick={onNext}>Zakończ<i className="icon ok" /></button>}
            </div>
            <div className="widget">
                <BirdsTask onComplete={onNext} onGameStateChanged={setGameState} />
            </div>
            <div className="state">
                <span>{gameState.findedBirdCount}/{gameState.birdCount}</span>
            </div>
        </Container>
        {showPreviewPopup && <Popup padding="small" onClick={() => { setShowPreviewPopup(false) }}>
            {/* <HelpGrid /> */}
        </Popup>}
        {showInfoPopup && <TaskPopup onClick={() => { setShowInfoPopup(false) }}>
            Pamiętając wskazówki z poprzedniej zagadki, znajdź w kawiarni tajemniczego posłańca
        </TaskPopup>}
    </>
}