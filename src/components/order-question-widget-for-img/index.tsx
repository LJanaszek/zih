import React, { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { Card } from "./card";
import style from "./style.module.css"
import up from "../../assets/arrow.png"
import down from "../../assets/arrow.png"

type Props = {
    items: { correctPlace: number, description: string}[],
    onComplete(): void,
    onInComplete(): void
}

type Item = {
    correctPlace: number,
    description:string
}

type GameState = {
    items: Item[]
}


export default function OrderQuestionLayoutWIthImg({items, onComplete, onInComplete}: Props) {
    const[setConfirm, setShowConfirm] = useState(false)
    const initData: GameState = useMemo(() => {
        return {
            items: items.map((item, index) => {
                return {
                    correctPlace: item.correctPlace,
                    description: item.description
                }
            })
        }
    }, [items]);

    const [state, itemMove] = useReducer((state: GameState, { dragIndex, hoverIndex }: { dragIndex: number, hoverIndex: number }) => {
        const copyArr = [...state.items];
        copyArr.splice(hoverIndex, 0, copyArr.splice(dragIndex, 1)[0]);

        return {
            ...state,
            items: [...copyArr]
        }
    }, initData)

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        itemMove({ dragIndex, hoverIndex })
    }, []);
    

    const moveUp = useCallback((index: number) => {
        if (index > 0) {
            moveCard(index, index - 1)
        }
        document.querySelectorAll('.item')[index-1]?.querySelectorAll('button')[0]?.focus();
    }, [moveCard]);

    const moveDown = useCallback((index: number) => {
        if (index < items.length) {
            moveCard(index, index + 1)
        }
        document.querySelectorAll('.item')[index+1]?.querySelectorAll('button')[1]?.focus();
    }, [moveCard, items]);

    useEffect(() => {
        // let i = 0;
        let isValid = false;
        let score = 0;
        for (let i = 0; i< items.length; i++){
            if(state.items[i].correctPlace===i){
                score = score+1
            }
        }    

        if (score===state.items.length){
            isValid = true;
        }
        if (isValid ) {
            onComplete();
        }
        else if(!isValid && setConfirm){
            onInComplete()
            setShowConfirm(false)
        }

    }, [state, onComplete, items.length, setConfirm, onInComplete])
    const numbers = ["25", "12", "2", "0"]
    return <div>
            
                <div aria-live='assertive' className={style.itemgroup}>
                    {
                        state.items.map((item, index) => {

                            if (item) {
                                return <div className={style.item} key={index}>
                                    <div className={style.indexNumber}>{numbers[index]}</div>
                                    <div className={style.buttons}>

                                    </div>
                                    <div className={style.imgWithDesc}>
                                        <div className={style.arrows}>
                                    <button onClick={() => moveUp(index)} className={style.arrow1}>
                                   
                                    </button>
                                    <button onClick={() => moveDown(index)}  className={style.arrow2}>
                                    
                                 
                                        
                                    </button>
                                    </div>
                                    
                                    <Card>
                                        <GameItem item={item} />
                                        
                                    </Card>
                                    </div>
                                    
                                </div>
                            }

                            return <></>

                        })
                    }
                </div>
                
            
                {/* <div className={style.section2}> <button className={style.button_hand} onClick={()=>setShowConfirm(true)}></button></div> */}
        </div>
}


const GameItem: React.FC<{
    item: Item
}> = ({ item }) => {
    return <div className={`pick-up`}>
        <p className={style.description}>{item.description}</p>
    </div>
}


