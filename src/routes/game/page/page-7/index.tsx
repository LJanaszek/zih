import { useState } from "react";
import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"

type Props = {
    onNext(): void;
};

export default function Page1({ onNext }: Props) {
    const [setNext, next] = useState(false)
    const [n, setN] = useState(0)
    function crypUp() {
        setN(n + 1)
        if (n > 5 || n < 0) {
            setN(0)
        };
        let list = ["A", "B", "C", "D", "E", "F"];
        document.getElementById('crypText')!.innerHTML = list[n];
        if (n === 3) {
                next(true);
            }else next(false);
        console.log(n)
    }

    function crypDown() {
        setN(n - 1)
        if (n < 0 || n>5) {
            setN(5)
        };
        let list = ["A", "B", "C", "D", "E", "F"];
        document.getElementById('crypText')!.innerHTML = list[n];
        if (n === 3) {
            next(true);
        }else next(false);
        console.log(n)
    }
    
    return <TextPage>
        <Box>
            <h2>Cryptext</h2>

            <div className="">
                <button onClick={() => { crypUp() }}>arrow up</button>
                <h3 id="crypText">A</h3>
                <button onClick={() => { crypDown() }}>arrow down</button>
            </div>
        </Box>
        {setNext &&
            <div className="button-list">
                <button className="button" onClick={onNext}>Przejdź do mapy<i className="icon map" /></button>
            </div>}
        {(!setNext) &&<div className="button-list">
            <button className="button">Przejdź<i className="icon map" /></button>
        </div>}
    </TextPage>

}


