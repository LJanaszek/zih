export type ItemData = {
    id: string,
    sprite: string,
    position: {
        x: number,
        y: number
    }
}

export const SCREEN: {
    ITEMS: ItemData[]
} = {
    ITEMS: [
        {
            id: 'b01',
            sprite: 'bird1',
            position: {
                x: 160,
                y: 135
            }
        },
        {
            id: 'b02',
            sprite: 'bird2',
            position: {
                x: 610,
                y: 76
            }
        },
        {
            id: 'b03',
            sprite: 'bird3',
            position: {
                x: 515,
                y: 205
            }
        },
        {
            id: 'b04',
            sprite: 'bird4',
            position: {
                x: 650,
                y: 195
            }
        },
        {
            id: 'b05',
            sprite: 'bird3',
            position: {
                x: 240,
                y: 220
            }
        },
        {
            id: 'b06',
            sprite: 'bird6',
            position: {
                x: 135,
                y: 390
            }
        },
        {
            id: 'b07',
            sprite: 'bird7',
            position: {
                x: 400,
                y: 400
            }
        },
        {
            id: 'b08',
            sprite: 'bird8',
            position: {
                x: 135,
                y: 495
            }
        },
        {
            id: 'b09',
            sprite: 'bird9',
            position: {
                x: 230,
                y: 565
            }
        },
        {
            id: 'b10',
            sprite: 'bird10',
            position: {
                x: 520,
                y: 545
            }
        },
    ]
}
