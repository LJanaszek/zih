import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import styled from "styled-components"

import piece1 from "./img/cat01.png";
import piece2 from "./img/cat02.png";
import piece3 from "./img/cat03.png";
import piece4 from "./img/cat04.png";
import piece5 from "./img/cat05.png";
import piece6 from "./img/cat06.png";
import piece7 from "./img/cat07.png";
import piece8 from "./img/cat08.png";
import piece9 from "./img/cat09.png";
import piece10 from "./img/cat10.png";
import piece11 from "./img/cat11.png";
import piece12 from "./img/cat12.png";
import piece13 from "./img/cat13.png";
import piece14 from "./img/cat14.png";
import piece15 from "./img/cat15.png";

const PIECES = [
    { id: 1, image: piece1 },
    { id: 2, image: piece2 },
    { id: 3, image: piece3 },
    { id: 4, image: piece4 },
    { id: 5, image: piece5 },
    { id: 6, image: piece6 },
    { id: 7, image: piece7 },
    { id: 8, image: piece8 },
    { id: 9, image: piece9 },
    { id: 10, image: piece10 },
    { id: 11, image: piece11 },
    { id: 12, image: piece12 },
    { id: 13, image: piece13 },
    { id: 14, image: piece14 },
    { id: 15, image: piece15 },
]

const Container = styled.div`
    position: relative;
    max-width: min(90vh, 90vw);
    margin: 1em auto;

    .tile {
        transition: top .5s, left .5s;
    }
`;

type Props = {
    onComplete(): void
}

const GAP = 5;

export default function Puzzle({ onComplete }: Props) {

    const containerRef = useRef<HTMLDivElement>(null)
    const [gameSize, setGameState] = useState(1200);


    const [state, action] = useReducer((state: (number | null)[], action: number) => {
        if (canMove(state, action)) {
            const value = state[action];
            return state.map(i => {
                if (i === value) return null;
                if (i === null) return value;

                return i;
            })
        }

        return state;
    }, [8, 15, 12, 9, 14, 5, 11, 10, 6, 1, 4, null, 13, 2, 7, 3]);

    const onResize = useCallback(() => {

        if (containerRef.current) {
            setGameState(containerRef.current.getBoundingClientRect().width)
        }
    }, [setGameState]);

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
        window.addEventListener('orientationchange', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('orientationchange', onResize);
        }
    }, [onResize]);

    useEffect(() => {
        const answer = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const isCorrect = answer.every((value, key) => {
            return state[key] === value
        })

        if (isCorrect) {
            onComplete();
        }
    }, [state, onComplete]);

    return <Container ref={containerRef} >
        <div className="inner" style={{ width: gameSize, height: gameSize }}>
            {
                PIECES.map(p => {
                    const posIndex = state.indexOf(p.id) || 0;
                    const tileSize = (gameSize - 3 * GAP) / 4

                    return <img alt='tile'
                        className="tile"
                        key={p.id}
                        src={p.image}
                        onClick={() => action(posIndex)}
                        data-xxx={posIndex}
                        style={{
                            width: tileSize,
                            height: tileSize,
                            position: "absolute",
                            display: "block",
                            top: (tileSize + GAP) * ((posIndex / 4) | 0),
                            left: (tileSize + GAP) * (posIndex % 4)
                        }} />
                })
            }

        </div>
    </Container>
}


function canMove(state: (number | null)[], index: number) {
    return true;
}
