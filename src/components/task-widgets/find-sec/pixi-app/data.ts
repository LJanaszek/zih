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
                x: 80,
                y: 165
            }
        },
    ]
}
