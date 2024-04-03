import img1 from "../../../assets/latwowierny.png"
import img2 from "../../../assets/zaraza.png"
import img3 from "../../../assets/roztargniony.png"
import img4 from "../../../assets/weszacy.png"
import img5 from "../../../assets/niezadowolony.png"
import img6 from "../../../assets/marzyciel.png"
import img7 from "../../../assets/pila.png"
import img0 from "../../../assets/skand.png"



export interface BravoTexts {
    id: string
    items: {
        h1: string,
        p: string,
        img: string,
    }[]
};


export const TEXTS: BravoTexts[] = [
    {
        id: "0",
        items: [
            {
                h1: 'Czytelnik literatury skandynawskiej',
                p: 'Lubisz, jak jest o małych ludziach, o szarych, zwykłych sprawach człowieczych i żeby nad tem huczał kosmos. Jesteś estetą. Z czasem wyrośniesz na czytelnika literatury klasycznej, mówiącego: „Ja czytam tylko klasyków”. To znaczy, że nic nie będziesz czytał.',
                img: img0
            }
        ]
    },
    {
        id: "1",
        items: [
            {
                h1: 'Czytelnik łatwowierny',
                p: 'Wszystko strawisz. Dziwisz się, ale wierzysz. Gdy przeczytasz w numerze primaaprilisowym, że kogoś ugryzła w udo jemioła albo że przed sędzią pokoju stanął piorun z mamusią-błyskawicą, powiesz: „Mój panie, kto by to pomyślał”. Przeglądasz gazety, książki, tygodniki, szukasz prawdy i chodzisz po świecie z głową ciężką i nabitą bredniami. W nocy źle sypiasz.',
                img: img1
            }
        ]
    },
    {
        id: "2",
        items: [
            {
                h1: 'Czytelnik zaraza, czyli chwytający za pióro',
                p: 'Podkreślasz ołówkiem niektóre zdania, stawiasz znaki zapytania, a na marginesie piszesz komentarze. Pamiętasz zawsze, że ktoś był kiedyś w jakiejś sprawie sześć lat temu innego zdania i wytykasz to ze świętym oburzeniem oraz z wypiekami na twarzy. Jesteś krowa, więc chcesz, żeby ludzie jak krowy nie zmieniali poglądów. Gdy powieść ma dwa tomy, zawsze mówisz, że drugi tom gorszy. Nic Ci się nie podoba.',
                img: img2
            }
        ]
    },
    {
        id: "3",
        items: [
            {
                h1: 'Czytelnik roztargniony',
                p: 'Nieznośny, inteligentny, wrażliwy, nieuchwytny czytelnik. Gdyby mógł się nieco skupić, trochę opanować! Gdy czytasz dowcipny felieton i pierwsze zdanie Cię rozśmieszy, tak się śmiejesz i tyle gadasz na ten temat, że zapominasz o dalszej lekturze. Opuszczasz całe strony i nie rozumiesz potem sensu i zniechęcasz się do autora. Gdy schylasz głowę nad książką, chciałoby się przytrzymać siłą ten niesforny, rozlatany łeb, zapominający o początku, nim dojdzie do końca.',
                img: img3
            }
        ]
    },
    {
        id: "4",
        items: [
            {
                h1: 'Węszący',
                p: 'Świdrujesz oczami każdą kartkę zadrukowanego papieru, jakby chcąc w niej wywiercić dwie dziury. Czytasz trzy razy to samo zdanie i kombinujesz. Wiesz wszystko. Gdy czytasz tom poezji Tuwima, mówisz: “On to pisał do tej blondynki z Tomaszowa. Znam. Jej wuj pracował w Gdańsku”. Powieść traktujesz jak plotkę. Mało czem można zadowolić takie monstrum. Chybaby wydać książkę telefoniczną z wykazem, kto z kim chodzi, kto z kim jest spokrewniony, kto z kim żyje i za czyje pieniądze.',
                img: img4
            }
        ]
    },
    {
        id: "5",
        items: [
            {
                h1: 'Niezadowolony',
                p: 'Nic Ci się nie podoba, ale czytasz chętnie. Mój przyjaciel ma takiego fryzjera. Pożycza co rano książkę i nazajutrz oddaje z grymasem. O Conradzie powiada: „To jakieś głupie”, o Żeromskim: „I po co to było pisać?”, o Victorze Hugo, że to „nabieranie gości”. O Sienkiewiczu mówi: „To jakiś chory facet”. Nawet „Trędowata” nie daje mu zadowolenia. Odniósł i powiedział, że drugiego tomu już nie chce. Kiedy mu objaśniono, że „Trędowata” jest w jednym tomie, pomilczał chwilkę i powiedział: „To lepiej”. Nareszcie coś mu się spodobało.',
                img: img5
            }
        ]
    },
    {
        id: "6",
        items: [
            {
                h1: 'Czytelnik-marzyciel',
                p: 'Czytasz wieczorami lub nocą, leżąc w łóżku. Odurzasz się, jakby narkotyzujesz się fabułą powieści. Czytasz złe i dobre książki z jednakowym zajęciem. Nie pamiętasz nigdy autorów przeczytanych książek. Nie masz zrozumienia dla stylu. Opisy przyrody opuszczasz. Nie lubisz zawikłanych spraw psychologicznych. Nie dajesz się podejść przez autora; wszystko, co nie dotyczy bezpośrednio sprawy stosunku dwu płci, opuszczasz bez miłosierdzia i bez drgnienia powiek. Póki się nie dowiesz, czy Hamlet kombinował z Ofelią, czy Winicjusz posiadł Ligię, czy Dante złapał Beatrycze, nie zaśniesz spokojnie.',
                img: img6
            }
        ]
    },
    {
        id: "7",
        items: [
            {
                h1: 'Czytelnik-piła',
                p: 'Lubisz sobie przeczytać coś ciężkiego, gruby tom, napisany zawiłym stylem. Gdy znajdziesz obcy wyraz, zaglądasz do słownika. Masz na biurku słowniczek Arcta „Dwadzieścia tysięcy słów obcych”. Nie lubisz jasności, lapidarności i dowcipu. Gdy z trudnością przebrniesz przez mętne i powykręcane, najeżone żargonem filozoficznym artykulisko, wielkim zadowoleniem napawa Cię zrozumienie mniej więcej, o co chodzi i wdzięczny jesteś za to autorowi. Kolekcjonujesz takie piły, które udało Ci się przebrnąć! Mówisz, że to głębokie i masz się przez to za inteligenta. Wszystko, co jasne i proste, jest dla Ciebie naiwne.',
                img: img7
            }
        ]
    }
]