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
        points: number
    }[]
};


export const QUESTIONS: IQuizQuestion[] = [
    {
        id: '1',
        text: 'czytasz książki?',
        answers: [
            {
                id: 'A',
                text: 'Czzytam',
                points: 2,
            }, {
                id: 'B',
                text: 'Śledziowatych',
                points: 1,
            }, {
                id: 'C',
                text: 'Morskich',
                points: 0,
            }
        ]

    },
    {
        id: '2',
        text: 'Kiedy już czytasz (jeżeli nie książkę, to etykietę od mydła), to czy robisz to uważnie? Słówko po słówku, linijka po linijce?',
        // imgSrc: img1,
        answers: [
            {
                id: 'A',
                text: 'Zawsze czytam uważnie',
                points: 2
            }, {
                id: 'B',
                text: 'Czasami coś mi umknie',
                points: 1

            }, {
                id: 'C',
                text: 'Ogólnie czytam po łebkach',
                points: 0
            }
        ]

    },
    {
        id: '3',
        text: 'Co powiesz na zawiłości i trudne wyrazy w tekście?',
        // imgSrc: img1,
        answers: [
            {
                id: 'A',
                text: 'Uwielbiam je',
                points: 1
            }, {
                id: 'B',
                text: 'Nienawidzę ich',
                points: 0

            }
        ]

    },
    {
        id: '4',
        text: 'Lubisz czytać?',
        // imgSrc: img1,
        answers: [
            {
                id: 'A',
                text: 'Żyję, by czytać',
                points: 2
            }, {
                id: 'B',
                text: 'Zależy co',
                points: 1

            }
        ]

    },

]





