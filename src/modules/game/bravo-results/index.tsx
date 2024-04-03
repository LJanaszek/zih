import { BravoTexts } from "./texts";
import { useQuestion } from "./use-question";
import styles from "./bravo.module.scss"

export interface Props {
    id: string
    onComplete(): void
}
export default function BravoResults({ id, onComplete }: Props) {
    const question = useQuestion(id)
    if (!question) {
        return <p>brak pytania w bazie</p>;
    }
    return (
        <BravoResultsDummy texts={question} onComplete={onComplete} />
    )
}

export interface DummyProps {
    texts: BravoTexts
    onComplete(): void
}

export function BravoResultsDummy({ texts, onComplete }: DummyProps) {
    return (
        <div className={styles.bravo}>
            {texts.items.map((a) => {
                return (
                    <div className={styles.bravoMain}>
                        <div className={styles.left}>
                            <h2>{a.h1}</h2>
                            <img src={a.img} alt="cos" />
                        </div>
                        <div className={styles.right}>
                            <p>{a.p}</p>
                        </div>
                    </div>
                )
            })}
            <div className="button-list" id={styles.button_list}>
                <button className="button-hand" id={styles.button} onClick={onComplete}></button>
            </div>
        </div>
    )
}