
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
            description: 'tora tora tora'
        },
        {
            id: 'szofar',
            image: SzofarImgSrc,
            name: 'szofar',
            description: 'szofar szofar szofar'
        },
        {
            id: 'menora',
            image: MenoraImgSrc,
            name: 'menora',
            description: 'menora menora menora'
        },
        {
            id: 'kipa (jarmułka)',
            image: KipaImgSrc,
            name: 'kipa (jarmułka)',
            description: 'kipa (jarmułka) kipa (jarmułka) kipa (jarmułka)'
        },
        {
            id: 'drejdel',
            image: DrejdelImgSrc,
            name: 'drejdel',
            description: 'drejdel drejdel drejdel'
        },
        {
            id: 'mezuza',
            image: MezuzaImgSrc,
            name: 'mezuza',
            description: 'mezuza mezuza mezuza'
        },
        {
            id: 'talit',
            image: TalitImgSrc,
            name: 'talit',
            description: 'talit talit talit'
        },
        {
            id: 'balsaminka',
            image: BalsaminkaImgSrc,
            name: 'balsaminka',
            description: 'balsaminka balsaminka balsaminka'
        },
    ]
}

export default WIDGET_DATA;
