import { createGlobalStyle } from "styled-components";

import GameRestartIconSrc from './assets/icons/zrestartuj.svg';
import GameStartIconSrc from './assets/icons/uruchom.svg';
// eslint-disable-next-line
import PowerIconSrc from '!file-loader!./assets/icons/power.svg';
import GameContinueIconSrc from './assets/icons/kontynuujGre.svg';
import KnowledgeIconSrc from './assets/icons/bazaWiedzy.svg';
import HelpIconSrc from './assets/icons/help.svg';
import StartTaskIconSrc from './assets/icons/startTask.svg';
import OkIconSrc from './assets/icons/ok.svg';
import EyeIconSrc from './assets/icons/eye.svg';
import TimerSrc from './assets/icons/timer.svg';
import HomeSrc from './assets/icons/home.svg';

// eslint-disable-next-line
import MapIconSrc from '!file-loader!./assets/icons/mapa.svg';



const ButtonStyle = createGlobalStyle`
    .button {
        /* display: inline-block; */
        background: var(--color1);
        color: white;
        padding: .3em 1.1em .3em 1.1em;

        text-decoration: none;

        font-size: 1.1rem;
        font-family: Gothic;

        text-align: center;
        box-sizing: border-box;

        border: none;
        border-collapse: collapse;
        cursor: pointer;

        display: flex;
        flex-direction: row;
        align-items: space-between;
        justify-content: space-between;

        &:hover {
            background: var(--color5);
        }

        &:focus {
            outline: 3px black solid;
        }

        i.icon {
            margin-left: .4em;
        }

        &.only-icon {
            i.icon {
                margin-left: 0;
            }
        }
    }

    i.icon {
        content: ' ';
        display: inline-block;

        width: 2em;
        height: 1.4em;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: contain;


        &.game-start {
            background-image: url(${GameStartIconSrc})
        }

        &.next,
        &.game-continue {
            background-image: url(${GameContinueIconSrc})
        }

        &.game-restart,
        &.restart {
            background-image: url(${GameRestartIconSrc})
        }

        &.knowledge {
            background-image: url(${KnowledgeIconSrc})
        }

        &.map {
            background-image: url(${MapIconSrc})
        }

        &.help {
            background-image: url(${HelpIconSrc})
        }

        &.start-task {
            background-image: url(${StartTaskIconSrc})
        }

        &.ok {
            background-image: url(${OkIconSrc})
        }

        &.eye {
            background-image: url(${EyeIconSrc})
        }

        &.timer {
            background-image: url(${TimerSrc})
        }

        &.home {
            background-image: url(${HomeSrc})
        }


        &.task-start {
            background-image: url(${PowerIconSrc})
        }
    }

    &.inverted {
        background: white;
        color: var(--color3);

        &:hover {
            background: white;
            color: var(--color5);

            i.icon {
                /**
                    * to jest sposób na pzrekolorowanie SVG który jest w tle bez jego edycji
                    * piewsze dwa filtry sprowadzają grafikę do czerni: brightness(0) saturate(100%)
                    * kolejne wyczarowałem używając tego kalkulatora: https://codepen.io/sosuke/pen/Pjoqqp
                */
                filter: brightness(0) saturate(100%) invert(23%) sepia(29%) saturate(413%) hue-rotate(202deg) brightness(95%) contrast(88%);
            }
        }

        i.icon {
            /**
                * to jest sposób na pzrekolorowanie SVG który jest w tle bez jego edycji
                * piewsze dwa filtry sprowadzają grafikę do czerni: brightness(0) saturate(100%)
                * kolejne wyczarowałem używając tego kalkulatora: https://codepen.io/sosuke/pen/Pjoqqp
            */
            filter: brightness(0) saturate(100%) invert(41%) sepia(10%) saturate(1863%) hue-rotate(202deg) brightness(95%) contrast(85%);
        }
    }
`;

export default ButtonStyle;
