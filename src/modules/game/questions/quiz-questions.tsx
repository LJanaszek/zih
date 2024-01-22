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
  onNext?(): void,
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

      <QuizQuestionDummy question={q} />

      {<QuizQuestionDummy question={q} /> && <div className="button-list"><button id="nextButton" className="button-hand quiz-button" onClick={onNext}></button></div>}
    </>
  );
}

export interface ForQuizQuest {
  question: IQuizQuestion;
  onConfirm?(id: string, value: string): void;
}

export function QuizQuestionDummy({ question }: ForQuizQuest) {
  const imgRef = useRef<HTMLImageElement>(null);

  const { register, watch } = useForm();

  const value = watch("an");

  const [showButton, setShowButton] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setShowConfirm(Boolean(value));
  }, [value]);

  // const onConfirmClicked = useCallback(() => {
  //   onConfirm(question.id, value);
  // }, [onConfirm, question, value]);

  // const {answers} = question
  // document.getElementById("nextButton")!.style.display='none';
  return (
    <div className={styles.answer}>
      <div className={styles.questionText}>
        <p>{question.text}</p>
      </div>
      <div className={styles.questionAnswer}>
        <div className={styles.answerDiv}>
                  <img src={fisher} alt="" />
                  <p id="answer" className={styles.answerBlock}></p>

                </div>
        <form className={styles.answer_block}>
          {question.answers.map((a) => {
            return (
              <div className={styles.answersGrid} key={a.id} >
                
                <label>

                  <div className={a.isCorrect ? styles.ans : styles.ans}>
                    <span><input
                      type="radio"
                      value={a.id}
                      {...register("an")}
                      onClick={() => {
                        document.getElementById("answer")!.innerHTML = a.desc;
                        document.getElementById("answer")!.style.display = 'block';
                        if (a.isCorrect) {
                          document.getElementById("nextButton")!.style.display = 'block';
                          // onConfirmClicked()
                        }
                        else {
                          setShowButton(false)
                          document.getElementById("nextButton")!.style.display = 'none';
                        }
                      }}
                    />{a.id}</span>
                    <p>{a.text}</p>
                  </div>
                </label>
              </div>

            );
          })}
        </form>


      </div>
    </div>
  );
}

