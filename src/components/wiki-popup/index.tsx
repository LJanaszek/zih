import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
// import  from "./img/OKfiolet.svg";
import headimg from '../../routes/game/img/ikonsButton/bazaWiedzy.svg';
import OKfiolet from "./img/OKfiolet.svg"
// import skrzyniaImg from '../../assets/skrzynia.png';
import CONFIG from "../../config";

type Props = React.PropsWithChildren<{
    onClick(): void
}>;

const Container = styled.div`
    background: rgba(0,0,0,.8);

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
    p{
        text-align: center;
    }
    .inner {

        background:  white;
        border:3px solid var(--color3);
        width: 100%;
        max-width: 700px;

        .inner-2 {
            background-size: contain;
            width: 100%;
            max-width: 700px;
            padding: 0 10%;
            height: 500px;


            display: flex;
            flex-direction: column;
            justify-content: center;

            .form {

                width: 80%;
                margin: 0 auto;

                display: flex;
                flex-direction: column;
            }

            input {
                font-size: 1.5rem;
                padding: .5em;
                border-radius: 2em;
                border: 6px solid var(--color3);

                text-align: center;
            }
        }
        // border: 1px solid var(--color3);

        display: flex;
        flex-direction: column;
        align-items: center;
    }
   .accept{
        width:20%;
        background-color:white;
        border: none;
        margin: 0 auto;
        // margin-top: 2em;
   }
    .popbutton {
        margin: 0 auto;
        width:30%;
        background: white;
        border-radius: 50px;
        padding:.5em;
        border-color: var(--color3);
        color: var(--color3);
    }
    .head{
        background: var(--color3);
        width: 100%;
        height:5em;
        text-align: center;
        
    }
    .headimg{
        position: relative;
        top:32%;
        height: 40%;
        margin: 0 auto;
        vertical-align: middle;
    }
    h2{
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
            <div className="head"><img className="headimg" src={headimg} alt="" /></div>
            <h2 id="wiki-modal-header">Wpisz hasło:</h2>
            <div className="inner-2">
                <div className="form">
                    <input type="text" ref={inputRef} aria-labelledby="wiki-modal-header" />
                    <p>Aby pobrać materiały edukacyjne <br/>wpisz hasło odkryte w trakcie gry.</p>
                    <button className="accept" onClick={onOpenClick}><img src={OKfiolet} alt="" /></button>
                </div>
                {showError && <div className="error" aria-live="polite">Hasło nieprawidłowe</div>}
            <button className="popbutton" onClick={onClick} ref={lastItemRef}>Anuluj</button>
            </div>
            
        </div>
    </Container>
}
