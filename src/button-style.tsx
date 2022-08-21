import { createGlobalStyle } from "styled-components";

import GameRestartIconSrc from './assets/icons/zrestartuj.svg';
import GameStartIconSrc from './assets/icons/uruchom.svg';
import GameContinueIconSrc from './assets/icons/kontynuujGre.svg';
import KnowledgeIconSrc from './assets/icons/bazaWiedzy.svg';
import HelpIconSrc from './assets/icons/help.svg';
import StartTaskIconSrc from './assets/icons/startTask.svg';
import OkIconSrc from './assets/icons/ok.svg';

// eslint-disable-next-line
import MapIconSrc from '!file-loader!./assets/icons/mapa.svg';



const ButtonStyle = createGlobalStyle`
    .button {
        display: inline-block;
        background: var(--color3);
        color: white;
        padding: .3em 1em;
        border-radius: 10em;

        text-decoration: none;

        font-size: 16pt;
        font-family: Gothic;

        text-align: center;
        box-sizing: border-box;

        border: none;
        border-collapse: collapse;
        cursor: pointer;

        &:hover {
            background: var(--color5);
        }

        &:focus {
            outline: 3px black solid;
        }

        i.icon {
            display: inline-block;

            width: 2em;
            height: 1.5em;
            vertical-align: middle;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: auto 100%;

            margin-left: .2em;

            &.game-start {
                background-image: url(${GameStartIconSrc})
            }

            &.next,
            &.game-continue {
                background-image: url(${GameContinueIconSrc})
            }

            &.game-restart {
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
        }
    }
`;

export default ButtonStyle;
