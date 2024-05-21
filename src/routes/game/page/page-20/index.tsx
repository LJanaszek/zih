import Box from "../../../../components/layout/box"
import { useState } from "react"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const [showButton, setShowButton] = useState(false);
    return <Box>
        <p className="paragraph-find">
        Co czyta student pod Starym BUW-em? Odnaleziony tytuł podstaw pod klucz, znajdujący się na dole ekranu, zestawiając litery z cyframi. Następnie, korzystając z odkrytego kodu, rozszyfruj tytuł gazety Chaima Zeliga Słonimiskiego.
        </p>
        <div className="password-view">
            <div className="password-view-title">
                <h2>Tytuł gazety hebrajskiej Chaima Zeliga Słonimiskiego</h2>
                <h1>H2-C7F482</h1>
            </div>
            <div className="input-field">
                <input type="text" id="fname" placeholder="_ _ - _ _ _ _ _ _" onKeyDown={(x) => {

                    if (x.target.value.length === 2 && x.key !== 'Backspace' && x.key !== '-') {
                        x.target.value = x.target.value + '-';
                    }
                    if ("-" in x.target.value.split('')) {

                    }
                }} maxLength={9} />

                <button className="button" onClick={() => {
                    let x = document.getElementById("fname")!.value;
                    x = x.toUpperCase();

                    if (x.lenght === 2) {
                        console.log("--------------------")
                        document.getElementById("fname")!.value = x + '-'
                    }
                    if (x === "HA-CEFIRA" || x === "HA CEFIRA") {
                        setShowButton(true)
                    }
                    else {
                        setShowButton(false)
                    }
                }}>sprawdź</button>
            </div>
        </div>
        <p className="key"> Klucz: 1/2/3/4/5/6/7/8/4/9/1	10	10/7/7/11/7/12/13  </p>

        {showButton &&
            <div className="button-list">
                <button className="button-hand" onClick={onNext}></button>
            </div>}
    </Box>
}