import { createGlobalStyle } from "styled-components";

import GameRestartIconSrc from './assets/icons/zrestartuj.svg';
import GameStartIconSrc from './assets/icons/uruchom.svg';
import GameContinueIconSrc from './assets/icons/kontynuujGre.svg';
import KnowledgeIconSrc from './assets/icons/bazaWiedzy.svg';
import HelpIconSrc from './assets/icons/help.svg';
import StartTaskIconSrc from './assets/icons/startTask.svg';
import OkIconSrc from './assets/icons/ok.svg';
import EyeIconSrc from './assets/icons/eye.svg';
import TimerSrc from './assets/icons/timer.svg';

// eslint-disable-next-line
import MapIconSrc from '!file-loader!./assets/icons/mapa.svg';



const ButtonStyle = createGlobalStyle`
    .button {
        /* display: inline-block; */
        background: var(--color3);
        color: white;
        padding: .3em 1.1em .3em 1.1em;
        border-radius: 10em;

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
    }

    &.inverted {
        background: var(--color2);
        color: var(--color5);

        i.icon {
            /**
                * to jest sposób na pzrekolorowanie SVG który jest w tle bez jego edycji
                * piewsze dwa filtry sprowadzają grafikę do czerni: brightness(0) saturate(100%)
                * kolejne wyczarowałem używając tego kalkulatora: https://codepen.io/sosuke/pen/Pjoqqp
            */
            filter: brightness(0) saturate(100%) invert(25%) sepia(5%) saturate(1990%) hue-rotate(202deg) brightness(94%) contrast(89%);
        }
    }
`;

export default ButtonStyle;
