import { useMemo, useReducer } from "react"
import styled from "styled-components"
import WIDGET_DATA, { ItemsData } from "./data"

type Props = {
    artefactId: string
    selectedAnswer: string | null,
    onSelectAnswer(id: string): void,
    onShowInfo(id: string): void,
    onValidate(): void,
    onClose(): void
}

const Container = styled.div``


export default function ArtefactMenu({ onClose, onShowInfo, onSelectAnswer, selectedAnswer, artefactId, onValidate }: Props) {

    const [artefact, artIndex] = useMemo(() => {
        const index = WIDGET_DATA.ITEMS.findIndex(a => a.id === artefactId);

        return [WIDGET_DATA.ITEMS[index], index]
    }, [artefactId])

    const [isValid, check] = useReducer((state: boolean, id: string) => {
        return id === artefactId;
    }, false);

    const answers = useMemo(() => {
        return WIDGET_DATA.ITEMS.reduce<ItemsData[]>((prev, next, index) => {
            if (index === artIndex) {
                return [...prev, next]
            }

            if ((index + 1 % WIDGET_DATA.ITEMS.length) !== artIndex) {
                return [...prev, next]
            }

            return prev;
        }, []);
    }, [artIndex]);

    return <Container>
        <button onClick={onClose}>Zamknij</button>
        {
            artefact && <>
                {artefact.name}

                <div>
                    {
                        answers.map((a) => {
                            return <div key={a.id}>
                                {a.id === selectedAnswer && <span>ZAZNACZONE</span>}
                                <button onClick={() => onSelectAnswer(a.id)}>{a.name}</button>
                                <button onClick={() => onShowInfo(a.id)}>info</button>
                            </div>
                        })
                    }
                </div>

                {!isValid && selectedAnswer && <button onClick={() => check(selectedAnswer)}>SPRAWDŹ</button>}
                {isValid && <button onClick={onValidate}>OK</button> }
            </>
        }
    </Container>
}

