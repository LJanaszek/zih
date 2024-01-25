import { useState } from "react";
import styled from "styled-components";
import BirdsTask, { BirdTaskState } from "../../../../components/task-widgets/birds";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";
import slonimski from "../../../../assets/slonimski.png"
type Props = {
    onNext(): void
}

const Container = styled.div`
    width: 100%;
    display: grid;
    // justify-content:end;
    .state {
        text-align: center;
    }
    .page-img{
        position: fixed;
    max-width: 20%;
    margin: 0 auto !important;
    margin-top: 2em !important;
    bottom: 0;
    left: 0;
    }
    .page-view{
        justify-content: left !important; 
        margin-left: 30% !important; 
    }
    .page-view>p{
        width:70%
    }
    

        .widget {
            flex-direction: column;
            align-items:center;
            margin-right:1em;
            display:flex;
            // position: relative;
            height:70vh;
            grid-column: 4;

            align-self: stretch;
            justify-self: stretch;
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
        <p className="paragraph-find">
            Pamiętając wskazówki z poprzedniej zagadki, znajdź w kawiarni tajemniczego posłańca.
        </p>
        <Container>
            <div className="page-view">
                <img className="page-img" src={slonimski} alt="" />
                <p>
                Wiesz już, kogo szukać? Bo młyn tu dzisiaj straszliwy. Gdy spotkasz literata, to nigdy nie wiesz na pewno, czy to jest ten od litra, czy od literatury. 
                </p>
            </div>

            <div className="widget">
                <BirdsTask onComplete={onNext} onGameStateChanged={setGameState} />
                <p className="underQuote">Józef Rapacki, Wnętrze kawiarni „Ziemiańska”, 1926, Muzeum Warszawy</p>
            </div>

        </Container>
        {gameState.isComplete && <div className="button-list-find"> <button className="button-hand" onClick={onNext}></button></div>}
    </>
}