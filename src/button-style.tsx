import GameRestartIconSrc from '../../assets/icons/zrestartuj.svg';
import GameStartIconSrc from '../../assets/icons/uruchom.svg';
import GameContinueIconSrc from '../../assets/icons/kontynuujGre.svg';
import KnowledgeIconSrc from '../../assets/icons/bazaWiedzy.svg';

import { createGlobalStyle } from "styled-components";

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
        cursor: pointer;

        &:hover {
            background: var(--color5);
        }

        &:focus {
            outline: 3px black solid;
        }

        @media (max-width: 1200px) {
            font-size: 16pt;
            width: 60%;
        }

        i.icon {
            display: inline-block;

            width: 2em;
            line-height: inherit;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: auto 100%;

            margin-left: .8em;

            &.game-start {
                background-image: url(${GameStartIconSrc})
            }

            &.game-continue {
                background-image: url(${GameContinueIconSrc})
            }

            &.game-restart {
                background-image: url(${GameRestartIconSrc})
            }

            &.knowledge {
                background-image: url(${KnowledgeIconSrc})
            }
        }
    }
`;

export default ButtonStyle;
