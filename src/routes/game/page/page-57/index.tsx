import { useState } from "react"
import BravoResults from "../../../../modules/game/bravo-results"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    let sum:number = 0
        for (let i = 1; i <= 4; i++) {
        let a=i.toString()
        // console.log(a)
        let single:number = Math.floor((sessionStorage[a]))
        sum+= single}
        let idFor = sum.toString()
    return (
        <>
    <BravoResults id={idFor} onComplete={onNext}/>
    
    </>
    )
}
