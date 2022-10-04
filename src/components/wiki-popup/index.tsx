import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
// import  from "./img/OKfiolet.svg";
import headimg from '../../routes/game/img/ikonsButton/bazaWiedzy.svg';
import OKfiolet from "./img/OKfiolet.svg"
import close from './img/xmark.svg';
import CONFIG from "../../config";
import usePopupFocusTrap from "../../utils/popup-focus-trap/use-popup-focus-trap";
type Props = React.PropsWithChildren<{
    onClick(): void
}>;

const Container = styled.div`
    background: rgba(0,0,0,.8);
    font-family:Gothic;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    .inner {
        text-align: center;
        max-width: 1200px;
        background: white;
        border: 1px solid var(--color3);

        display: flex;
        flex-direction: column;
        align-items: center;

        width: 95vw;

        max-height: 90vh;
        overflow-y: auto;
    }



    header{
        width:100%;
        height:4em;
        max-height: 20vh;
        min-height: 10vh;
        background: url(${headimg}) 50% 50% no-repeat var(--color3);
        background-size: auto 80%;
        text-align:center;
        display:flex;

        flex-shrink: 0;

        position: relative;


        .close-button {
            height: 3em;
            max-height: 15vh;
            min-height: 7.5vh;

            position: absolute;
            top: .5em;
            right: .5em;

            filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7497%) hue-rotate(171deg) brightness(103%) contrast(102%);
        }
    }

    p {
        text-align: center;
        margin:0
    }

    .inner-2 {
        background-size: contain;
        width: 100%;
        max-width: 700px;


        display: flex;
        flex-direction: column;
        justify-content: center;

        .form {

            width: 80%;
            margin: 0 auto;

            display: flex;
            flex-direction: column;
        }

        input[type=text] {
            font-size: 1.5rem;
            padding: .5em;
            border-radius: 2em;
            border: 6px solid var(--color3);
            font-family: Gothic;
            text-align: center;
            margin:0 auto;
            color: var(--color3);
            text-transform: uppercase;
            @media(max-width: 485px){
                width:70%;
            }

            &:focus-visible {
                border-color: var(--color1);
                outline: none;
            }
        }
    }

    .accept{
        height: 5em;
        background-color:white;
        border: none;
        margin: 1em auto;
    }

    h2{
        font-family: Gothic;
        color: var(--color3);
    }

    .error{
        text-align:center;
        margin: 1em 0;
        color: var(--color1);
    }
`;
export default function WikiPopup({ children, onClick }: Props) {

    const [showError, setShowError] = useState(false);

    const textInputRef = useRef<HTMLInputElement>(null);

    const { firstItemRef, lastItemRef } = usePopupFocusTrap<HTMLInputElement, HTMLInputElement>();

    const onOpenClick = useCallback(() => {
        const value = (textInputRef.current?.value || '').toLocaleLowerCase().trim();
        if (value === CONFIG.PASSWORD) {
            var a = document.createElement('a');
            a.href = '/bruno_shultz_baza_wiedzy.pdf';
            a.style.display = 'none';
            a.setAttribute('download', 'Bruno Shultz - Baza Wiedzy.pdf');
            document.body.appendChild(a);
            a.click();
            onClick();
        } else {
            setShowError(true);
        }
    }, [setShowError, onClick]);

    useEffect(() => {
        if (textInputRef.current) {
            textInputRef.current.focus();
        }
    }, [])

    return <Container aria-modal="true">
        <div className="inner">
            <header>
                <input className="close-button" type="image" src={close} alt="zamknij" onClick={onClick} ref={firstItemRef} />
            </header>
            <h2 id="wiki-modal-header">Wpisz hasło:</h2>
            <div className="inner-2">
                <form className="form" onSubmit={(e) => { e.preventDefault() }}>
                    <input type="text" ref={textInputRef} aria-labelledby="wiki-modal-header" />
                    <p>Aby pobrać materiały edukacyjne <br />wpisz hasło odkryte w trakcie gry.</p>
                    <input className="accept" type="image" alt="ok" src={OKfiolet} onClick={onOpenClick} ref={lastItemRef} />
                </form>
                {showError && <div className="error" aria-live="polite">Hasło nieprawidłowe</div>}

            </div>
        </div>
    </Container >
}
