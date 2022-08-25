import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import Artefact from "./artefact";
import ArtefactInfo from "./artefact-info";
import ArtefactMenu from "./artefact-menu";
import WIDGET_DATA from "./data";

type Props = {
    onComplete(): void,
    onShowButtons(value: boolean): void;
}

const Container = styled.div`

    height: 100%;
    width: 96%;
    margin: 0 auto;

    display: flex;
    justify-content: stretch;
    align-items: stretch;

    .items-grid {
        width: calc(100% - 1rem);
        max-height: calc(100% - 2rem);
        display: grid;

        border: 3px solid var(--color1);
        border-radius: 2rem;
        padding: 1rem .5rem;

        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);

        gap: 1rem;

        & > * {
            grid-column: span 2;

            &:nth-child(7) {
                grid-column: 2 / span 2;
            }
        }

        @media(orientation: landscape) {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 1fr);

            & > * {
                grid-column: span 1;

                &:nth-child(7) {
                    grid-column: span 1;
                }
            }

        }
    }

    .item-menu {
        width: 100%;
    }

    .item-info {
        width: 100%;
    }
`;

type GameState = {
    correctAnswers: string[];
    selectedArtefact: string | null;
    selectedAnswer: string | null;
    showArtefactInfo: string | null;
    isPairValid: boolean,
    isComplete: boolean
}

export default function ArtefactsWidget({ onComplete, onShowButtons }: Props) {

    const [gameState, reducer] = useReducer((state: GameState, action: any) => {
        const { type, id } = action;

        switch (type) {
            case 'select-item':
                return {
                    ...state,
                    selectedArtefact: id,
                    selectedAnswer: null
                }

            case 'select-answer':
                return {
                    ...state,
                    selectedAnswer: id
                }

            case 'show-info':
                return {
                    ...state,
                    showArtefactInfo: id
                }

            case 'validate':
                if (state.selectedArtefact && state.selectedAnswer === state.selectedArtefact) {
                    return {
                        ...state,
                        selectedAnswer: null,
                        selectedArtefact: null,
                        correctAnswers: [
                            ...state.correctAnswers,
                            state.selectedArtefact
                        ],
                        isComplete: state.correctAnswers.length + 1 === WIDGET_DATA.ITEMS.length
                    }
                }
                break;
        }

        return state;
    }, {
        correctAnswers: [],
        selectedArtefact: null,
        selectedAnswer: null,
        showArtefactInfo: null,
        isPairValid: false,
        isComplete: false
    });

    useEffect(() => {
        if (gameState.isComplete) {
            onComplete();
        }
        onShowButtons(Boolean(!gameState.selectedArtefact));
    }, [gameState, onComplete, onShowButtons])


    const showArtefactInfo = Boolean(gameState.showArtefactInfo);
    const showArtefactMenu = !showArtefactInfo && Boolean(gameState.selectedArtefact);
    const showGrid = !showArtefactInfo && !showArtefactMenu;

    return <Container>
        {showGrid && <div className="items-grid">
            {
                WIDGET_DATA.ITEMS.map(a => {

                    const isAnswered = gameState.correctAnswers.includes(a.id)

                    return <Artefact
                        key={a.id}
                        image={a.image}
                        label={isAnswered ? a.name : ''}
                        onClick={() => { !isAnswered && reducer({ type: 'select-item', id: a.id }) }}
                    />
                })
            }
        </div>}
        {showArtefactMenu && gameState.selectedArtefact && <div className="item-menu">
            <ArtefactMenu
                artefactId={gameState.selectedArtefact}
                selectedAnswer={gameState.selectedAnswer}
                onSelectAnswer={(id: string) => { reducer({ type: 'select-answer', id }) }}
                onShowInfo={(id: string) => { reducer({ type: 'show-info', id }) }}
                onValidate={() => { reducer({ type: 'validate' }) }}
                onClose={() => { reducer({ type: 'select-item', id: null }) }}
            />
        </div>}
        {showArtefactInfo && <div className="item-info">
            <ArtefactInfo
                artefactId={gameState.showArtefactInfo}
                onClose={() => { reducer({ type: 'show-info', id: null }) }}
            />
        </div>}
    </Container>
}
