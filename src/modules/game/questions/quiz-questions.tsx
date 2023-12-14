import { useQuestion } from "./use-question";
import { IQuizQuestion, } from "./quest-base";
import styles from "./questionStyle.module.scss";

import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useAnswer } from "../../main/hooks/use-answer";
import { useSaveAnswer } from "../hooks/use-save-answer";
// import { ButtonLike } from "../../../atoms/button-like";
// import { Popup } from "../../../molecules/popup/popup";
import { Link } from "react-router-dom";
// import { getQuizTwo, getRide } from "../../../routes/routes";
// import incorrect from "../../../assets/incorrect.png"
// import correct from "../../../assets/correct.png"

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
export function QuizQuestion({ id, onComplete, onNext, showPopup }: Props2) {
  
  const q = useQuestion(id);
  const answer = useAnswer(id);

  const showQuestion = Boolean(!answer);

  const saveAnswer = useSaveAnswer();

  // const onQuestionConfirm = useCallback(
  //   (id: string, value: string) => {
  //     saveAnswer(id, value);
  //   },
  //   [saveAnswer]
  // );

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
      
      {/* {!showQuestion && showPopup === false && id === '13' &&
      <Popup>
        <QuizAnswerDummy question={q} userAnswerId={answer} />
        <button className="button">
          <Link to={getQuizTwo()}>dalej</Link>
        </button></Popup>}

      {!showQuestion && showPopup === false && id === '14' && 
      <Popup>
        <QuizAnswerDummy question={q} userAnswerId={answer} />
        <button className="button">
        <Link to={getRide()}>dalej</Link>
        </button></Popup>} */}

      { <QuizQuestionDummy question={q}/> && <div><button id="nextButton" onClick={onNext}>dalej2</button></div>}
    </>
  );
}

export interface ForQuizQuest {
  question: IQuizQuestion;
  onConfirm?(id: string, value: string): void;
}

export function QuizQuestionDummy({ question}: ForQuizQuest) {
  
  const imgRef = useRef<HTMLImageElement>(null);

  const { register, watch } = useForm();

  const value = watch("an");

  const[showButton, setShowButton] = useState(false); 

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setShowConfirm(Boolean(value));
  }, [value]);

  // const onConfirmClicked = useCallback(() => {
  //   onConfirm(question.id, value);
  // }, [onConfirm, question, value]);

  // const {answers} = question
  return (
    <div className={styles.answer}>
      <div className={styles.questionText}>
        <h1>QUIZ</h1>
        <p>{question.text}</p>
      </div>
      <div className={styles.questionAnswer}>
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
                      onClick={()=>{
                        document.getElementById("answer")!.innerHTML = a.desc;
                        if(a.isCorrect){
                          document.getElementById("nextButton")!.style.display='block';
                          // onConfirmClicked()
                        }
                        else{
                          setShowButton(false)
                          document.getElementById("nextButton")!.style.display='none';
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
        <div id="answer">
            
        </div>
      </div>
    </div>
  );
}
// function show(a:any){
//   document.getElementById("answer")!.innerHTML = a.desc;
//   if(a.isCorrect){
//     setShowButton(true)
//   }
// }
export interface QuizAnswerDummyProps {
  question: IQuizQuestion,
  userAnswerId: string
}

export function QuizAnswerDummy({ question, userAnswerId }: QuizAnswerDummyProps) {
  let showDesc = false

  const correctQuizAnswer = question.answers.find(quizAnswer => quizAnswer.isCorrect)
  const userQuizAnswer = question.answers.find(quizAnswer => quizAnswer.id === userAnswerId)

  const userAnswerText: string = userQuizAnswer?.text || 'Błąd danych';
  const isUserAnswerCorrect: boolean = (correctQuizAnswer?.id === userQuizAnswer?.id); //tutaj ma być sprawdzenie czy user wybral poprawną odpwiedz
  const correctAnswerText: string = correctQuizAnswer?.text || 'Błąd danych';
  const questionDescription: string = question.description || "";

  if(questionDescription){
    showDesc = true
  }


  return <div className={styles.answerPopup}>
    
    {/* <p>Twoja odpowiedz to: {userAnswerText}</p> */}

    {isUserAnswerCorrect && <div><p>SUPER!</p><p>Twoja odpowiedź to: {userAnswerText}</p></div>}

    {!isUserAnswerCorrect && showDesc && <div>
      
      <p>Poprawną odpowiedzą było: {correctAnswerText}</p>
      <p>Ponieważ: {questionDescription}</p>
    </div>}
    {!isUserAnswerCorrect && !showDesc && <div>
    
      <p>Poprawną odpowiedzą było: {correctAnswerText}</p>
    </div>}
  </div>
}

