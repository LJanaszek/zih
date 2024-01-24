import { useQuestion } from "./use-question";
import { IQuizQuestion, } from "./quest-base";
import styles from "./questionStyle.module.scss";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useAnswer } from "../../main/hooks/use-answer";
import fisher from "./fiszer.png"

export interface Props2 {
  id: string;
  onComplete?(): void;
  onNext(): void,
  showPopup?: boolean
}
/**
 * Jeżeli user nie odpowiedział jeszcze na to pytanie to pokazujemy <QuizQuestionDummy>
 * Jezeli user opdpiwedział na pytanie to pokazujemy podsumowanie pytania
 */
export function QuizQuestion({ id, onComplete, onNext }: Props2) {

  const q = useQuestion(id);
  const answer = useAnswer(id);


  useEffect(() => {
    if (onComplete && Boolean(answer)) {
      onComplete();
    }
  }, [answer, onComplete])
  if (!q) {
    return <p>brak pytania w bazie</p>;
  }

  return (
    <>

      <QuizQuestionDummy question={q} onNext={onNext} />

      {/* {<QuizQuestionDummy question={q} />} */}
    </>
  );
}

export interface ForQuizQuest {
  question: IQuizQuestion;
  onConfirm?(id: string, value: string): void;
  onNext():void
}

export function QuizQuestionDummy({ question, onNext }: ForQuizQuest, ) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [name, setName] = useState("")
  const { register, watch } = useForm();
  const [key, setKey] = useState("")
  const value = watch("an");



  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setShowConfirm(Boolean(value));
  }, [value]);

  return (
    <div className={styles.answer}>
      {/* <div className={styles.questionText}> */}
        
        <p className="paragraph-find">{question.text}</p>
      {/* </div> */}
      <div className={styles.questionAnswer}>
      
        <form className={styles.answer_block} method="GET">
          {question.answers.map((a) => {
            
            return (
              <div className={styles.answersGrid} key={a.id} >

                <label>

                  <div className={a.isCorrect ? styles.ans : styles.ans}>
                    <span><input
                      
                      type="radio"
                      value={a.points}
                      {...register("an")}
                      onClick={(e) => {
                        
                        setName(e.target.value)
                        setShowConfirm(true)

                      }

                      }
                    />{a.id}</span>
                    <p>{a.text}</p>
                  </div>
                </label>

              </div>

            );
          })}
        
        </form>
        {showConfirm &&
        <div className="button-list">
          <button className="button-hand" onClick={()=>{
            sessionStorage.setItem(question.id, name)
            onNext()
            
          }}>  </button>
        </div>}

      </div>
      
    </div>
  );
}

