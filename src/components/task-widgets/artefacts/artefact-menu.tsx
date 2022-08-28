import { useCallback, useEffect, useMemo, useReducer } from "react"
import styled from "styled-components"
import WIDGET_DATA from "./data";
import infoSrc from '../../../assets/icons/info.svg';
import closeSrc from '../../../assets/icons/close.svg';
import okSrc from '../../../assets/icons/ok-circle.svg';
import classNames from "classnames";

type Props = {
    artefactId: string
    selectedAnswer: string | null,
    onSelectAnswer(id: string): void,
    onShowInfo(id: string): void,
    onValidate(): void,
    onClose(): void
}

const Container = styled.div`
    position: relative;
    width: 100%;

    display: grid;

    .close {
        height: 2rem;
        background: none;
        border: none;
        align-self: flex-end;
        position: absolute;
        top: .1rem;
        right: .1rem;
    }

    .item-info {
        flex-grow: 1;
        width: 90%;
        max-height: 40vh;
        min-height: 30vh;
        margin: 0 auto 1rem;

        background-size: contain;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }

    .answers {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .5rem;
    }

    .answer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .answer-button {
        background: none;
        border: none;
        font-size: 1.2rem;
        color: var(--color3);
        border: 2px solid transparent;
        padding: 0 .5em;


        &.selected {
            border: 2px solid var(--color1);
            border-radius: .5em;

        }


    }

    .answers.no-valid .answer-button.selected {
        border-color: transparent;
        color: var(--color1);
    }

    .answer-info-button {
        display: inline-block;
        height: 1.2rem;
        margin-top: .5em;
    }

    .check-button-container {
        height: 4rem;
        margin: 1rem auto;
        text-align: center;
    }

    .check-button {
        height: 4rem;
    }

    @media (orientation: portrait) {

        grid-template-columns: 1fr;

    }

    @media (orientation: landscape) {

        grid-template-columns: 1fr 3fr;
        grid-template-rows: 2fr 1fr;

        .answers {
            grid-column: 2;
            grid-row: 1 / span 2;
        }
    }
`


export default function ArtefactMenu({ onClose, onShowInfo, onSelectAnswer, selectedAnswer, artefactId, onValidate }: Props) {

    const artefact = useMemo(() => {
        return WIDGET_DATA.ITEMS.find(a => a.id === artefactId);
    }, [artefactId])

    const [isValid, check] = useReducer((state: boolean | null, id: string | null) => {
        if (!id) return null;
        return id === artefactId;
    }, null);

    const classes = classNames({
        answers: true,
        'no-valid': isValid === false
    })

    const onSelect = useCallback((id: string) => {
        onSelectAnswer(id);
        check(null);
    }, [check, onSelectAnswer]);

    useEffect(() => {
        if (isValid) {
            onValidate();
        }
    }, [isValid, onValidate]);

    return <Container>
        <input type='image' alt="zamknij" src={closeSrc} className="close" onClick={onClose} />
        {
            artefact && <>
                <div className="item-info" style={{ backgroundImage: `url(${artefact.image})` }}>

                </div>
                <div className={classes}>
                    {
                        WIDGET_DATA.ITEMS.map((a) => {
                            return <div className="answer" key={a.id}>
                                <button
                                    className={`answer-button ${a.id === selectedAnswer ? 'selected' : ''}`}
                                    onClick={() => onSelect(a.id)}
                                    role='radio'
                                    aria-checked={a.id === selectedAnswer}
                                >{a.name}</button>
                                <input className="answer-info-button" type='image' src={infoSrc} onClick={() => onShowInfo(a.id)} alt={`dodatkowa infomacja o: ${a.name}`} />
                            </div>
                        })
                    }
                </div>
                <div className="check-button-container">
                    {selectedAnswer && <input type='image' alt="sprawdź" disabled={!selectedAnswer} className="check-button" src={okSrc} onClick={() => check(selectedAnswer)} />}
                </div>
            </>
        }
    </Container>
}

