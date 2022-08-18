import { GameScenario, GAME_STEP_TYPE } from "./types";

export const SCENARIO: GameScenario = {
    startStep: '0.1',
    steps: [
        {
            // tekst wprowadzenia
            id: '0.1',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-1',
            nextStep: '0.2'
        },
        {
            // mapa v1 6pkt geo
            id: '0.2',
            type: GAME_STEP_TYPE.MULTI_GEO_STEP,
            stepsId: ['1.1', '2.1', '3.1', '4.1', '5.1', '6.1'],
            minVisitedPoints: 6,
            nextStep: '7.1'
        },
        {
            id: '1.1',
            type: GAME_STEP_TYPE.GEO_STEP,//dojście w terenie
            position: {
                lat: 52.16383572337064,
                lng: 21.21937101781457
            },
            name: ['Punkt geo 1'],
            nextStep: '1.2'
        },
        {
            id: '1.2',
            type: GAME_STEP_TYPE.TASK,//zadanie
            taskId: 'task-1',
            nextStep: '0.2'
        },
        {
            id: '2.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.16805363672106,
                lng: 21.223030642885533
            },
            name: ["Punkt geo 2"],
            nextStep: '2.2'
        },
        {
            id: '2.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-2',
            nextStep: '0.2'
        },
        {
            id: '3.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.16896284983934,
                lng: 21.216436812891743
            },
            name: ["Punkt geo 3"],
            nextStep: '3.2'
        },
        {
            id: '3.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-3',
            nextStep: '0.2'
        },
        //dodać punkty od 4.1 do 6.1
        {
            id: '4.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.16379517815583,
                lng: 21.210987653919734
            },
            name: ["Punkt geo 4"],
            nextStep: '4.2'
        },
        {
            id: '4.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-4',
            nextStep: '0.2'
        },
        {
            id: '5.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.15935776350059,
                lng: 21.208431439628814
            },
            name: ["Punkt geo 5"],
            nextStep: '5.2'
        },
        {
            id: '5.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-5',
            nextStep: '0.2'
        },
        {
            id: '6.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.16211034733332,
                lng: 21.21154192886253
            },
            name: ["Punkt geo 6"],
            nextStep: '6.2'
        },
        {
            id: '6.2',
            type: GAME_STEP_TYPE.TASK,
            taskId: 'task-6',
            nextStep: '0.2'
        },
        
        {
            //mapa v2
            id:'7.1',
            type: GAME_STEP_TYPE.MULTI_GEO_STEP,
            stepsId: ['8.1'],
            minVisitedPoints: 1,
            nextStep: '9.1',
        },
        {
            id: '8.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position:{ 
                lat: 52.16162878122313,
                lng: 21.21137303357458
            },
            name: ["Punkt końcowy"],
            nextStep: '7.1'
            },
        {
            id: '9.1',
            type:GAME_STEP_TYPE.PAGE,
            pageId: '9',
            nextStep: null
        }
    ]
}
