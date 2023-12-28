import { useCallback } from "react";
import styles from "./checkboxStyle.module.scss"
import { useForm } from "react-hook-form";

type Props = {
    items: {
        id: string,
        text: string,
    }[],
    onComplete(): void
}
export default function CheckboxAnswerForm({ items, onComplete }: Props, count: number) {
    const { register} = useForm();    

    const checking = useCallback(() => {
        let isValid = false;
        let allInputs = document.querySelectorAll('input')
        let count = 0;
        allInputs.forEach((element) => {

            if (element.checked) {
                count = count + 1
                console.log(count)
            }
        });
        if (count === items.length) {
            isValid = true;
        }
        if (isValid) {
            onComplete()
        }
    }, [ onComplete, items.length])
    return <div className={styles.Apteczka}>
        <div className={styles.formHeader}><section className={styles.firstP}>TAK/NIE</section><section className={styles.secondP}>TAK/NIE</section></div>
        <nav>
            {items.map((a) => {
                return <div className={styles.singleRowAll}>
                    <p className={styles.questionText}>{a.text}</p>
                    <form className={styles.singleRowRadio}>
                        
                        <label className={styles.singleInputLabel}>
                        
                            <input type="radio"
                                id={a.id}
                                value={a.id}
                                {...register(a.id)}
                                onClick={checking}
                            />
                            <div className={styles.singleRadio}>
                            
                            </div>
                            
                            </label>/


                        <label className={styles.singleInputLabel}>
                        
                            <input type="radio"
                                id={a.id}
                                value={a.id}
                                {...register(a.id)}
                                onClick={checking}
                            />
                            <div className={styles.singleRadio}>
                            
                            </div></label><br />
                    </form>
                </div>
            })}

        </nav>

    </div>
}