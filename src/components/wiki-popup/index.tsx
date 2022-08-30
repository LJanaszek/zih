import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
// import  from "./img/OKfiolet.svg";
import headimg from '../../routes/game/img/ikonsButton/bazaWiedzy.svg';
import OKfiolet from "./img/OKfiolet.svg"
import close from './img/xmark.svg';
import CONFIG from "../../config";
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
        overflow-y: scroll;
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
        margin-top: 1em;
    }
`;
export default function WikiPopup({ children, onClick }: Props) {

    const [showError, setShowError] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const onOpenClick = useCallback(() => {
        const value = (inputRef.current?.value || '').toLocaleLowerCase().trim();
        if (value === CONFIG.PASSWORD) {
            var a = document.createElement('a');
            a.href = '/Raszyn_Gra-bitwa_pod_Raszynem_1809.pdf';
            a.style.display = 'none';
            a.setAttribute('download', '/Raszyn Gra - bitwa pod Raszynem 1809.pdf');
            document.body.appendChild(a);
            a.click();
        } else {
            setShowError(true);
        }
    }, [setShowError]);

    const lastItemRef = useRef<HTMLButtonElement>(null);

    const firstFocusListHandler = useCallback((e: KeyboardEvent) => {
        if (lastItemRef.current && e.key === 'Tab' && e.shiftKey === true) {
            e.preventDefault();
            lastItemRef.current.focus();
        }
    }, []);

    const lastFocusListHandler = useCallback((e: KeyboardEvent) => {
        if (inputRef.current && e.key === 'Tab' && e.shiftKey === false) {
            e.preventDefault();
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {

        const cancelButton = lastItemRef.current
        const input = inputRef.current

        if (cancelButton && input) {
            input.focus();
            cancelButton.addEventListener('keydown', lastFocusListHandler)
            input.addEventListener('keydown', firstFocusListHandler)
        }

        return () => {
            cancelButton?.removeEventListener('keydown', lastFocusListHandler)
            input?.removeEventListener('keydown', firstFocusListHandler)
        }
    }, [firstFocusListHandler, lastFocusListHandler])

    return <Container aria-modal="true">
        <div className="inner">
            <header>
                <input className="close-button" type="image" src={close} alt="zamknij" onClick={onClick} />
            </header>
            <h2 id="wiki-modal-header">Wpisz hasło:</h2>
            <div className="inner-2">
                <form className="form">
                    <input type="text" ref={inputRef} aria-labelledby="wiki-modal-header" />
                    <p>Aby pobrać materiały edukacyjne <br />wpisz hasło odkryte w trakcie gry.</p>
                    <input className="accept" type="image" alt="ok" src={OKfiolet} onClick={onOpenClick} />
                </form>
                {showError && <div className="error" aria-live="polite">Hasło nieprawidłowe</div>}

            </div>
        </div>
    </Container >
}
