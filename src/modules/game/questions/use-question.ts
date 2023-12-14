import { QUESTIONS } from "./quest-base";

export function useQuestion(id: string) {
    return QUESTIONS.find(s => {
        return s.id === (id);
    })
  }