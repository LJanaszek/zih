import { useState } from "react";
import styled from "styled-components";
import BirdsTask, { BirdTaskState } from "../../../../components/task-widgets/find-sec";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";
type Props = {
    onNext(): void
}

const Container = styled.div`
    width: 100%;
    display: grid;
    .state {
        text-align: center;
    }
    .page-view{
        justify-content: left !important; 
        // margin-left: 30% !important; 
    }
    .page-view>p{
        width:70%
    }
    

        .widget {
            margin-right:1em;
            display:flex;
            // position: relative;
            height:70vh;
            grid-column: 2;

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

    return <>
        <ScrollToTop />
        <p className="paragraph-find">
            Gdzie mogą być schowane dokumenty?
        </p>
        <Container>
            <div className="widget">
                <BirdsTask onComplete={onNext} onGameStateChanged={setGameState} />
            </div>

        </Container>
        {gameState.isComplete && <div className="button-list-find"> <button className="button-hand" onClick={onNext}></button></div>}
    </>
}