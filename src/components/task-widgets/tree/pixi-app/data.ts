export type ItemData = {
    id: string,
    text: string
}

export type BinData = {
    id: string,
    label: string,
    position: {
        x: number, y: number
    },
    size: {
        width: number,
        height: number
    }
}

const ITEMS = [
    {
        id: 'item11',
        text: 'stołówka'
    },
    {
        id: 'item12',
        text: 'leżalnie'
    },
    {
        id: 'item13',
        text: 'picie mleka'
    },
    {
        id: 'item14',
        text: 'szatnia'
    },
    {
        id: 'item15',
        text: 'koce'
    },

    {
        id: 'item21',
        text: 'umywalnie'
    },
    {
        id: 'item22',
        text: 'mierzenie temp.'
    },
    {
        id: 'item23',
        text: 'nocniki'
    },
    {
        id: 'item24',
        text: 'czyszczenie obuwia'
    },

    {
        id: 'item31',
        text: 'rozrywki'
    },
    {
        id: 'item32',
        text: 'goście - rodzice'
    },
    {
        id: 'item33',
        text: 'poczta'
    },
    {
        id: 'item34',
        text: 'biblioteka'
    },

    {
        id: 'item41',
        text: 'gołębnik'
    },
    {
        id: 'item42',
        text: 'stacja meteo.'
    },
    {
        id: 'item43',
        text: 'ogród i sad'
    },
    {
        id: 'item44',
        text: 'kurnik'
    }
];


export const SCREEN: {
    ITEMS: ItemData[],
    BINS: BinData[],
    PAGES: string[][],
    ANSWERS: [string, string[]][]
} = {
    PAGES: ITEMS
        .map(i => i.id)
        .reduce((prev, itemId) => {

            if (!prev.length) {
                return [[itemId]]
            }

            if (prev[prev.length - 1].length < 3) {
                prev[prev.length - 1].push(itemId);
                return prev;
            }

            return [
                ...prev,
                [itemId]
            ];
        }, [] as string[][])

    ,
    ANSWERS: [
        ['bin1', ['item11', 'item12', 'item13', 'item14', 'item15']],
        ['bin2', ['item21', 'item22', 'item23', 'item24']],
        ['bin3', ['item31', 'item32', 'item33', 'item34']],
        ['bin4', ['item41', 'item42', 'item43', 'item44']]
    ],
    ITEMS,
    BINS: [
        {
            id: 'bin1',
            label: 'Gospodarstwo',
            position: {
                x: 1230,
                y: 1080
            },
            size: {
                width: 400,
                height: 400
            }
        },
        {
            id: 'bin2',
            label: 'Higiena',
            position: {
                x: 1230,
                y: 1080
            },
            size: {
                width: 400,
                height: 400
            }
        },
        {
            id: 'bin3',
            label: 'koło pracy kulturalnej',
            position: {
                x: 1230,
                y: 1080
            },
            size: {
                width: 400,
                height: 400
            }
        },
        {
            id: 'bin4',
            label: 'Koło przyrodnicze',
            position: {
                x: 1230,
                y: 1080
            },
            size: {
                width: 400,
                height: 400
            }
        },
    ]
}
