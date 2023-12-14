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
                desc: "Co Ty opowiadasz…. Do tej rodziny należą rybak, rybitwa oraz miasto Rybnik na Śląsku."
            }, {
                id: '2',
                text: 'Śledziowatych',
                desc: " Nieźle, naprawdę nieźle. Główka pracuje, ale chyba musi zrobić nadgodziny, żeby się z tym uporać."

            }, {
                id: '3',
                text: 'Morskich',
                desc: "Och, razem z Marią Morską, wspaniałą aktorką i niespełnioną miłością Antoniego. Źle."
            }, {
                id: '4',
                text: 'Zakąsek',
                desc: "Wybornie! Masz apetyt na śledzika i na sukces.",
                isCorrect: true
            }
        ]

    },
    {
        id: '2',
        text: 'Jak Antoni Słonimski nazywa spory, które toczy na łamach gazet?',
        // imgSrc: img1,
        answers: [
            {
                id: '1',
                text: 'Bojami z Babilonem',
                desc: "Ach, nie szukajcie wód babilońskich, Jedna niewielka została tu rzeka,Wierzby szeregiem nad nią stoją,I widać ślady kopyt końskich U wodopoju, Rzeka kręta jak glista,Rzeka pośpieszna jak mrówka,Eufrat i Tygrys w pastewnej równinie:Nasza mulista Młynówka Tędy płynie"
            }, {
                id: '2',
                text: 'Bojami nad Bzdurą',
                desc: " Brawo. Jak sam napisał: “Autorem był gen. Antoni Słonimski. Terenem walk była rzeka Bzdura [...] Starałem się nieraz podać rękę ludziom tonącym w szarych falach rzeki Bzdury i to ratownictwo usprawiedliwia wiele moich okrucieństw wojennych. [...] przed nazwiskiem autora dodano «gen.». Nie jest to skrótem słowa generał, ale oczywiście słowa geniusz”",
                isCorrect: true

            }, {
                id: '3',
                text: 'Chocholim tańcem',
                desc: "To Stachu Wyspiański, chochole."
            }, {
                id: '4',
                text: 'Michalim tańcem',
                desc: "Tańcowały dwa Michały i miały zakute pały. Julian Tuwim (prawie)",
                
            }
        ]

    },
    {
        id: '3',
        text: 'Kim była kobieta w fioletowym kapeluszu?',
        // imgSrc: img1,
        answers: [
            {
                id: '1',
                text: 'Modelką malarza Józefa Rapackiego',
                desc: "Nie kombinuj, odpowiedź jest prostsza."
            }, {
                id: '2',
                text: 'Marią Morską',
                desc: " A Ty znowu swoje…W Gdyni stocznię postawili, koniecznie pojedź obejrzeć. ."

            }, {
                id: '3',
                text: 'Janem Lechoniem.',
                desc: "..."
            }, {
                id: '4',
                text: 'Tajemniczym posłańcem.',
                desc: " No, nareszcie. Oto twoja tajemnicza przesyłka.",
                isCorrect: true
            }
        ]

    },

]





