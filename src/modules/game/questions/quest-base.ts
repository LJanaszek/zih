// import img1 from "";
export interface IQuizQuestion {
    id: string,
    text: string,
    imgSrc?: string,
    description?: string,
    answers: {
        id: string,
        text: string,
        isCorrect?: boolean,
        desc: string
    }[]
};


export const QUESTIONS: IQuizQuestion[] = [
    {
        id: '1',
        text: 'Do jakiej rodziny należą śledzie?',
        // imgSrc: img1,
        answers: [
            {
                id: '1',
                text: 'Ryb',
                desc:"Co Ty opowiadasz…. Do tej rodziny należą rybak, rybitwa oraz miasto Rybnik na Śląsku."
            }, {
                id: '2',
                text: 'Śledziowatych',
                desc:" Nieźle, naprawdę nieźle. Główka pracuje, ale chyba musi zrobić nadgodziny, żeby się z tym uporać."
                
            }, {
                id: '3',
                text: 'Morskich',
                desc:"Och, razem z Marią Morską, wspaniałą aktorką i niespełnioną miłością Antoniego. Źle."
            }, {
                id: '4',
                text: 'Zakąsek',
                desc:"Wybornie! Masz apetyt na śledzika i na sukces.",
                isCorrect: true
            }
        ]

    },

]





