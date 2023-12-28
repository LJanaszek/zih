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
            pageId: 'page-12',
            nextStep: '2.0'
        },
        {
            id: '2.0',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.163835723370600,
                lng: 21.21937101781457
            },
            name: [''],
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
            pageId: 'page-16',
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
            nextStep: '2.7'
        },
        {
            id: '2.7', //cryptex
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-7',
            nextStep: '3.1'
        },
        {
            id: '3.1', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-17',
            nextStep: '3.2'
        },
        {
            id: '3.2', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-18',
            nextStep: '3.3'
        },
        {
            id: '3.3', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-19',
            nextStep: '3.4'
        },
        {
            id: '3.4', //szyfr
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-20',
            nextStep: '3.5'
        },
        {
            id: '3.5', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-21',
            nextStep: '3.6'
        },
        {
            id: '3.6', //układanka 4x4
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-22',
            nextStep: '3.7'
        },
        {
            id: '3.7', //wpisz litere
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-23',
            nextStep: '3.8'
        },
        {
            id: '3.8', //cryptex
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-24',
            nextStep: '4.1'
        },
        {
            id: '4.1', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-25',
            nextStep: '4.2'
        },
        {
            id: '4.2', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-26',
            nextStep: '4.3'
        },
        {
            id: '4.3', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-27',
            nextStep: '4.4'
        },
        {
            id: '4.4', //podpisanie obrazków
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-28',
            nextStep: '4.5'
        },
        {
            id: '4.5', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-29',
            nextStep: '4.6'
        },
        {
            id: '4.6', //cryptex
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-30',
            nextStep: '5.1'
        },
        {
            id: '5.1', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-31',
            nextStep: '5.2'
        },
        {
            id: '5.2', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-32',
            nextStep: '5.3'
        },
        {
            id: '5.3', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-33',
            nextStep: '5.4'
        },
        {
            id: '5.4', // /????????
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-34',
            nextStep: '5.5'
        },
        {
            id: '5.5', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-35',
            nextStep: '5.6'
        },
        {
            id: '5.6', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-36',
            nextStep: '5.7'
        },
        {
            id: '5.7', //ułóż w kolejności
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-37',
            nextStep: '5.8'
        },
        {
            id: '5.8', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-38',
            nextStep: '5.9'
        },
        {
            id: '5.9', //ułóż w kolejności
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-39',
            nextStep: '5.10'
        },
        {
            id: '5.10', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-40',
            nextStep: '5.11'
        },
        {
            id: '5.11', //szyfr
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-41',
            nextStep: '5.12'
        },
        {
            id: '5.12', //
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-42',
            nextStep: '5.13'
        },
        {
            id: '5.13', //cryptex
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-43',
            nextStep: '6.1'
        },
        {
            id: '6.1', //tekst
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-44',
            nextStep: '6.1'
        },
        
    ]
}
