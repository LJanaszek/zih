import { GameScenario, GAME_STEP_TYPE } from "./types";


//page 1-9 -> geo 1
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
            pageId: 'page-8', // quiz 2
            nextStep: '1.8'
        },
        {
            id: '1.8', //quiz 3
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-9',
            nextStep: '1.9'
        },
        {
            id: '1.9', //cryptex
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-7',
            nextStep: '2.1'
        },
        {
            id: '2.1', //ekran A
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-10',
            nextStep: '2.2'
        },
        {
            id: '2.2', //zadanie 1
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-11',
            nextStep: '2.3'
        },
        {
            id: '2.3', //ekran C
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-12',
            nextStep: '2.4'
        },
        {
            id: '2.4', //znajdź na obrazie
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-13',
            nextStep: '2.5'
        },
        {
            id: '2.5', //ekran E
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-14',
            nextStep: '2.6'
        },
        {
            id: '2.6', //ekran F zagadka wpisz hasło
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-15',
            nextStep: '2.3'
        }
    ]
}
