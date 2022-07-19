import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPolicyRoute } from "../../routes/routes";

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 10;

    width: 100vw;
    max-height: 33vh;
        height: 100%;

    pointer-events: none;

    .window {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: auto;

        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }

    .inner {
        position: relative;
        padding: 0 1em 1em;
        overflow: hidden;

        width: 100%;

        background: white;
        border-top: 2px solid var(--color3);

        pointer-events: all;

        text-align: center;
        overflow: scroll;
    }

    .buttons {
        display: flex;
        justify-content: center;
    }
`;

const LS_KEY = 'cookiesInfo2'

export default function CookiesInfo() {

    const [showCookies, setShowCookies] = useState<boolean>(!Boolean(localStorage.getItem(LS_KEY)));
    const okRef = useRef<HTMLButtonElement>(null);

    const closeCookies = useCallback(() => {
        localStorage.setItem(LS_KEY, '1');
        setShowCookies(false);
    }, []);

    return <>
        {showCookies && <Container aria-modal="true" role="dialog" aria-describedby="cookie-info">
            <div className="window">
                <div className="inner">
                    <p id="cookie-info">
                        Używamy plików cookies, aby ułatwić Ci korzystanie z naszego serwisu oraz do celów statystycznych. Jeśli nie blokujesz tych plików, to zgadzasz się na ich użycie oraz zapisanie w pamięci urządzenia. Pamiętaj, że możesz samodzielnie zarządzać cookies, zmieniając ustawienia przeglądarki. Więcej informacji w naszej <Link to={getPolicyRoute()}>polityce prywatności</Link>.
                    </p>
                    <div className="buttons">
                        <button ref={okRef} className="button" tabIndex={1} onClick={closeCookies}>Dalej</button>
                    </div>
                </div>
            </div>
        </Container>}
    </>
}
