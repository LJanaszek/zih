import { GameScenario, GAME_STEP_TYPE } from "./types";

export const SCENARIO: GameScenario = {
    startStep: '1.0',
    steps: [
        {
            id: '1.0',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.163835723370600,
                lng: 21.21937101781457
            },
            name: [''],
            nextStep: '1.1'
        },
        {
            id: '1.1', //ekran A
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-1',
            nextStep: '1.2'
        },
        {
            id: '1.2', //ekran B
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-2',
            nextStep: '1.3'
        },
        {
            id: '1.3', //memory
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-6',
            nextStep: '1.4'
        },
        {
            id: '1.4', //znajdź na obrazku
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-4',
            nextStep: '1.5'
        },
        {
            id: '1.5', //wprowadzenie
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-5',
            nextStep: '1.6'
        },
        {
            id: '1.6', //quiz 1
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-3',
            nextStep: '1.7'
        },
        {
            id: '1.7', //quiz 2
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-7',
            nextStep: '9.1'
        },
        {
            id: '9.1', //quiz 3
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'end',
            nextStep: null
        }
    ]
}
