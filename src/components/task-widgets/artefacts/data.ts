
import ToraImgSrc from './img/tora.svg';
import SzofarImgSrc from './img/szofar.svg';
import MenoraImgSrc from './img/menora.svg';
import KipaImgSrc from './img/kipa.svg';
import DrejdelImgSrc from './img/drejdel.svg';
import MezuzaImgSrc from './img/mezuza.svg';
import TalitImgSrc from './img/talit.svg';
import BalsaminkaImgSrc from './img/balsaminka.svg';

export type ItemsData = {
    id: string,
    image: string,
    name: string,
    description: string
}

const WIDGET_DATA: {
    ITEMS: ItemsData[]
} = {
    ITEMS: [
        {
            id: 'tora',
            image: ToraImgSrc,
            name: 'tora',
            description: 'Dokładniej Sefer Tora – zwój, na którym jest spisany Pięcioksiąg przechowywany w synagogach. Jest nawinięty na dwa wałki, często wykonane z cennego drewna. Części wystające poza pergamin są zazwyczaj bogato zdobione rzeźbą i inkrustacją. Sefer Torę, okrytą pokrowcem, zwanym sukienką (meil), i przystrojoną ozdobami ze szlachetnych metali (klej kodesz), przechowuje się w świętej skrzyni (aron ha-kodesz).'
        },
        {
            id: 'szofar',
            image: SzofarImgSrc,
            name: 'szofar',
            description: 'Instrument dęty bez ustnika o charakterze liturgicznym. Wykonywany z baraniego lub koziego rogu. Obecnie używany w święta Rosz ha-Szana i Jom Kipur, w Izraelu także podczas zaprzysiężenia nowego prezydenta.'
        },
        {
            id: 'menora',
            image: MenoraImgSrc,
            name: 'menora',
            description: 'Siedmioramienny świecznik stojący, o siedmiu ramionach w jednym szeregu. Najczęściej metalowy, wykonany z brązu lub srebra, czasem ceramiczny lub drewniany. Zazwyczaj bogato zdobiony ornamentem. Menora jest jednym z najstarszych i najbardziej rozpowszechnionych symboli używanych w sztuce żydowskiej, jest także traktowana jako symbol judaizmu. Widnieje na godle państwa Izrael.'
        },
        {
            id: 'kipa (jarmułka)',
            image: KipaImgSrc,
            name: 'kipa',
            description: 'Rytualna czapeczka noszona głównie przez Żydów. Jest płytka, przykrywająca czubek głowy, wykonana zwykle z sukna lub adamaszku, zdobiona haftem. Noszona według zwyczaju przestrzeganego w judaizmie od czasów starożytnych. Zwana też jarmułką lub mycką. Nazwa pochodzi z języka hebrajskiego i oznacza dosłownie: „kopuła”.'
        },
        {
            id: 'drejdel',
            image: DrejdelImgSrc,
            name: 'drejdel',
            description: 'Czworoboczny bączek z pojedynczą literą hebrajską po każdej stronie, który służy do uprawiania tradycyjnej żydowskiej gry hazardowej podczas święta Chanuka. Współcześnie w Izraelu na drejdlu znajdują się litery nun (נ), gimel (ג), he (ה) i pe (פ), które są pierwszymi literami słów w zdaniu: Nes gadol haja po („Stał się tu wielki cud”).'
        },
        {
            id: 'mezuza',
            image: MezuzaImgSrc,
            name: 'mezuza',
            description: 'Zwitek pergaminu z wypisanym fragmentem tekstu z Księgi Powtórzonego Prawa (wersy 6, 4-9 i 11, 13-21). Umieszczany w ozdobnym futerale wykonanym z drewna, metalu, kości lub szkła i zawieszany na zewnętrznej, prawej framudze drzwi. Mający wartość symboliczną, historyczną i religijną. Zgodnie z obyczajem osoba przekraczająca drzwi wejściowe powinna dotknąć mezuzy dłonią. Praktykowane bywa także składanie pocałunku na dłoni lub całowanie palców jeszcze przed dotknięciem.'
        },
        {
            id: 'talit',
            image: TalitImgSrc,
            name: 'talit',
            description: 'Biały szal z pasami koloru granatowego lub czarnego, zakładany przez mężczyzn na głowę lub ramiona w czasie modlitwy. Na rogach zakończony frędzlami zwanymi „cyces” (hebr. cicit). Środkowa część talitu wzdłuż dłuższego brzegu może być ozdobiona atarą – pasem różnej długości i szerokości wykonanym ze srebrnej lub złotej koronki albo bogato haftowanym.'
        },
        {
            id: 'balsaminka',
            image: BalsaminkaImgSrc,
            name: 'balsaminka',
            description: 'Pojemnik na wonne zioła, zwłaszcza goździki, imbir, muszkat, ziele angielskie z mirtem i płatki róży. Używany w liturgii żydowskiej podczas ceremonii hawdali, kończącej szabat. Zazwyczaj wykonywana ze srebra, na kształt wieżyczki zwieńczonej iglicą z chorągiewką. Rzadziej również w formie owoców i kwiatów na łodyżkach, a także ryb.'
        },
    ]
}

export default WIDGET_DATA;
