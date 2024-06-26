import { useState } from "react";
import styled from "styled-components";
import BirdsTask, { BirdTaskState } from "../../../../components/task-widgets/find";
import ScrollToTop from "../../../../utils/widgets/scroll-to-top";
import Box from "../../../../components/layout/box";
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
            flex-direction: column;
            align-items:center;
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

    return <Box>
        <ScrollToTop />
        <p className="paragraph-find">
            Znajdź na obrazie, przedstawiającym Towarzystwo Przyjaciół Nauk, Abrahama Sterna. Możesz przybliżyć obraz.
        </p>
        <Container>
            <div className="widget">
                <BirdsTask onComplete={onNext} onGameStateChanged={setGameState} />
                <p className="underQuote">Bronisław Kopczyński, Nadanie dyplomu księdzu Onufremu Kopczyńskiemu za „Gramatykę języka polskiego”, 1916, olej na płótnie, Muzeum Narodowe w Warszawie.</p>
            </div>


        </Container>

        {gameState.isComplete && <div className="button-list-find"> <button className="button-hand" onClick={onNext}></button></div>}
    </Box>
}