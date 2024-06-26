import { useState } from "react";
import Popup from "../../../../components/elements/popup";
import cryptex from "../../../../assets/cryptex.png"
import arrow from "../../../../assets/arrow.png"


type Props = {
    onNext(): void;
};
var n = 0;
export default function Page1({ onNext }: Props) {
    const [next, setNext] = useState(false)

    function crypUp() {
        let list = ["1", "2", "3", "4", "5", "6"];
        n++
        if (n > 5) {
            n = 0
        };

        document.getElementById('crypText')!.innerHTML = list[n];
    }


    function crypDown() {
        let list = ["1", "2", "3", "4", "5", "6"];
        n--
        if (n < 0) {
            n = 5
        };
        document.getElementById('crypText')!.innerHTML = list[n];
    };


    function ifGood() {
        if (n === 4) {
            setNext(true);
        }
        else {
            setNext(false)
        }
    }


    return <>
        <div>
            <h2>Cryptext</h2>
            
            <div className="cryptex3">
                <div className="crypInside">
                    <div className="crypImgLeft"> <img src={cryptex} alt="" /></div>
                    <div className="crypBlock crypNum" >
                        <button className="arr_up" onClick={() => { crypUp() }}>
                            <img src={arrow} alt="" /></button>
                            <p id="crypText">1</p>
                            <button className="arr_down" onClick={() => { crypDown() }}>
                                <img src={arrow} alt="" /></button></div>
                    <div className="crypBlock"><p>A</p></div>
                    <div className="crypBlock"><p>A</p></div>
                    <div className="crypBlock"><p>A</p></div>
                    <div className="crypBlock"><p>A</p></div>
                    <div className="crypImgRight"> <img src={cryptex} alt="" /></div>
                </div>
                
            </div>
            
        </div>
        <div className="button-list">
            <button className="button-hand" onClick={ifGood}></button>
        </div>
        {next && <Popup onClick={onNext}>
            Przejdź dalej
        </Popup>}
        {/* popup */}
    </>

}


