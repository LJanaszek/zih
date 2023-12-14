import { useGameModuleState } from "../../game";

/**
 * Hook który zwraa watość odpowiedzi na pytanie o podanym [id]
 */
export function useAnswer(id:string):any{
    // Pobieram cały stam modulu main
    const state = useGameModuleState();  


    // Przypisuje do `answer` obiekt odpowiedzi o answer.id === id lub undefined jezeli odpowiedx nie istnieje 
    const answer = state.gameState?.answers.find(a => {
        return a.id === id;
    })

    return answer?.value;  
        
}