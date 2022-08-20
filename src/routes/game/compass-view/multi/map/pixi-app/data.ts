export type PointData = {
    id: string,
    position: {
        x: number,
        y: number
    }
}

export const MAP: {
    POINTS: PointData[]
} = {
    POINTS: [
        {
            id: '1.1',
            position: {
                x: 100,
                y: 100
            }
        },
        {
            id: '2.1',
            position: {
                x: 200,
                y: 100
            }
        },
        {
            id: '3.1',
            position: {
                x: 100,
                y: 200
            }
        },
        {
            id: '4.1',
            position: {
                x: 200,
                y: 200
            }
        },
        {
            id: '5.1',
            position: {
                x: 300,
                y: 100
            }
        },
        {
            id: '6.1',
            position: {
                x: 100,
                y: 300
            }
        },
        {
            id: '8.1',
            position: {
                x: 300,
                y: 300
            }
        }
    ]
}
