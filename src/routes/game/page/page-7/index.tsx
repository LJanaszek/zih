import { useState } from "react";
import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import Popup from "../../../../components/elements/popup";
import cryptex from "../../../../assets/krypteks.png"
import arrow from "../../../../assets/arrow.png"

type Props = {
    onNext(): void;
};
var n = 0;
export default function Page1({ onNext }: Props) {
    const [next, setNext] = useState(false)

    function crypUp() {
        let list = ["A", "B", "C", "D", "E", "F"];
        n++
        if (n > 5) {
            n = 0
        };

        document.getElementById('crypText')!.innerHTML = list[n];
    }


    function crypDown() {
        let list = ["A", "B", "C", "D", "E", "F"];
        n--
        if (n < 0) {
            n = 5
        };
        document.getElementById('crypText')!.innerHTML = list[n];
    };


    function ifGood() {
        if (n === 3) {
            setNext(true);
        }
        else {
            setNext(false)
        }
    }


    return <TextPage>
        <Box>
            <h2>Cryptext</h2>
            
            <div className="cryptex3">
                <div className="crypInside">
                    <div className="crypBlock" >
                        <button className="arr_up" onClick={() => { crypUp() }}>
                            <img src={arrow} /></button>
                            <p id="crypText">A</p>
                            <button className="arr_down" onClick={() => { crypDown() }}>
                                <img src={arrow} /></button></div>
                    <div className="crypBlock"><p>A</p></div>
                    <div className="crypBlock"><p>A</p></div>
                    <div className="crypBlock"><p>A</p></div>
                    <div className="crypBlock"><p>A</p></div>
                </div>
                
            </div>
            
        </Box>
        <div className="button-list">
            <button className="button-hand" onClick={ifGood}></button>
        </div>
        {next && <Popup onClick={onNext}>
            <button className="button" onClick={() => { setNext(false) }}>Zamknij Popup<i className="icon map" /></button>
        </Popup>}
        {/* popup */}
    </TextPage>

}


