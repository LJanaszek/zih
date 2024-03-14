import { useState } from "react";
import { Popup } from "./popup";

type Props = {
    onNext(): void,
    setShowPopup: boolean
}

export function PopupAccept({onNext, setShowPopup}:Props){
    return <> 
    <Popup>
        <p>idziemy dalej?</p>
        <button type={"button"}onClick={onNext}>TAK</button>
        <button type={"button"}onClick={()=>{setShowPopup = false}}>ZAMKNIJ</button>
    </Popup>
    </>
}

