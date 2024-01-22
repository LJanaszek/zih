import {TEXTS} from "./texts"

export function useQuestion(id: string) {
    return TEXTS.find(s => {
        return s.id === (id);
    })
  }