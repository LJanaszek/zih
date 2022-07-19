import { GameScenario, GAME_STEP_TYPE } from "./types";

export const SCENARIO: GameScenario = {
    startStep: '0.1',
    steps: [
        {
            id: '0.1',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-1',
            nextStep: '0.2'
        },
        {
            id: '0.2',
            type: GAME_STEP_TYPE.MULTI_GEO_STEP,
            stepsId: ['1.1', '2.1', '3.1'],
            minVisitedPoints: 3,
            nextStep: '4.1'
        },
        {
            id: '1.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.15414609929565,
                lng: 20.91776308234229
            },
            name: ['Punkt geo 1'],
            nextStep: '1.2'
        },
        {
            id: '1.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-1',
            nextStep: '0.2'
        },
        {
            id: '2.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.15376456305676,
                lng: 20.919047105253416
            },
            name: ["Punkt geo 2"],
            nextStep: '2.2'
        },
        {
            id: '2.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-2',
            nextStep: '0.2'
        },
        {
            id: '3.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.15057526976408,
                lng: 20.915680744642703
            },
            name: ["Punkt geo 3"],
            nextStep: '3.2'
        },
        {
            id: '3.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-2',
            nextStep: '0.2'
        },
        {
            id: '4.1',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-3',
            nextStep: null
        }
    ]
}
