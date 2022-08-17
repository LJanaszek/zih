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
                x: 100,
                y: 100
            }
        },
        {
            id: 'b02',
            sprite: 'bird2',
            position: {
                x: 200,
                y: 100
            }
        },
        {
            id: 'b03',
            sprite: 'bird3',
            position: {
                x: 100,
                y: 200
            }
        },
        {
            id: 'b04',
            sprite: 'bird4',
            position: {
                x: 200,
                y: 200
            }
        },
        {
            id: 'b05',
            sprite: 'bird5',
            position: {
                x: 300,
                y: 100
            }
        },
        {
            id: 'b06',
            sprite: 'bird6',
            position: {
                x: 100,
                y: 300
            }
        },
        {
            id: 'b07',
            sprite: 'bird7',
            position: {
                x: 300,
                y: 300
            }
        },
        {
            id: 'b08',
            sprite: 'bird8',
            position: {
                x: 400,
                y: 100
            }
        },
        {
            id: 'b09',
            sprite: 'bird9',
            position: {
                x: 100,
                y: 400
            }
        },
        {
            id: 'b10',
            sprite: 'bird10',
            position: {
                x: 400,
                y: 400
            }
        },
    ]
}
