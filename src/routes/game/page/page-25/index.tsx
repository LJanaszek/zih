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
        let list = ["S", "R", "K", "A", "J", "E"];
        n++
        if (n > 5) {
            n = 0
        };

        document.getElementById('crypText')!.innerHTML = list[n];
    }


    function crypDown() {
        let list = ["S", "R", "K", "A", "J", "E"];
        n--
        if (n < 0) {
            n = 5
        };
        document.getElementById('crypText')!.innerHTML = list[n];
    };


    function ifGood() {
        if (n === 2) {
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
                    <div className="crypBlock crypNum"><p>5</p></div>
                    <div className="crypBlock" >
                        <button className="arr_up" onClick={() => { crypUp() }}>
                            <img src={arrow} alt=""/></button>
                            <p id="crypText">A</p>
                            <button className="arr_down" onClick={() => { crypDown() }}>
                                <img src={arrow} alt=""/></button></div>
                    
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


