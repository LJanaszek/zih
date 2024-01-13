import { useReducer } from "react"
import styled from "styled-components"
import Select from 'react-select';
import sculp1 from "../../../../assets/sculp.png";
import sculp2 from "../../../../assets/sculp.png";
import sculp3 from "../../../../assets/sculp.png";
import sculp4 from "../../../../assets/sculp.png";

type Props = {
    relations: number[],
    interpretations: string[]
}

type Item = {
    id: string,
    text: string
}

type Slot = {
    id: string,
    title: number,
    item: Item | null
}

type GameState = {
    items: Item[],
    unselected: string[],
    slots: Slot[]
}

const Container = styled.div`

    .reaction{
        display:block;
    }
    .is-over .drop-mock {
        border-color: #FCD779;
        box-shadow: inset 0 0 3px 3px #FCD779;
    }

    .drop-mock {
        min-height: 50px;
        outline: 1px solid black;
    }

    .grid {
        display:flex;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        &>* {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
    }

    .unselected .pickup-container{
        margin: .5em 0;
    }
    .intension{
        font-size:16px;
        width: -webkit-fill-available;
        *{
            padding:0;
        }
    }

`;

export default function Page92Widget2({ relations, interpretations }: Props) {
    const [state, moveItem] = useReducer((state: GameState, action: { itemId: string, slotId: string }) => {
        const item = state.items.find(i => i.id === action.itemId);
        const slot = state.slots.find(s => s.id === action.slotId);
        // var n = 0;

        if (item && slot) {
            const oldItem = slot.item;

            if (oldItem) {
                state.unselected = Array.from(new Set([...state.unselected, oldItem.id]));
            }

            return {
                ...state,
                slots: state.slots.map(s => {
                    if (s.id === action.slotId) {
                        s.item = item;
                    } else if (s.item?.id === action.itemId) {
                        s.item = null;
                    }
                    return s;
                }),
                unselected: item.id !== 'blank' ? state.unselected.filter(id => id !== action.itemId) : state.unselected
            }
        }

        return state;
    }, {
        items: [
            {
                id: 'blank',
                text: '---'
            },
            ...interpretations.map((r, index) => {
                return {
                    id: `i${index}`,
                    text: r
                }
            })],
        slots: relations.map((r, index) => {
            return {
                id: `s${index}`,
                title: r,
                item: null
            }
        }),
        unselected: ['blank', ...interpretations.map((r, index) => `i${index}`)]
    });
    
    return <Container>
        <div className="grid">
            {
                state.slots.map(slot => {
                    var images = [sculp1, sculp2, sculp3, sculp4]
                    
                    return <>
                    <div>
                        <div className="reaction">
                            <img src={images[0]} alt="dupa" />
                            {slot.item?.id}
                        </div>
                        <div className="intension">
                            <Select
                                value={{ value: slot.item?.id, label: slot.item?.text }}
                                onChange={(data: { value: any; }) => {
                                    if (data?.value)
                                        moveItem({
                                            itemId: data.value,
                                            slotId: slot.id
                                        })
                                        
                                }}
                                options={state.items
                                    .filter(item => state.unselected.find(id => item.id === id))
                                    .map((item) => {
                                        return {
                                            value: item!.id,
                                            label: item!.text
                                        }
                                    })}
                                theme={(provided: { colors: any; }) => {
                                    return {
                                        ...provided,
                                        colors: {
                                            ...provided.colors,
                                            primary: '#FCD779',
                                            primary25: '#FCD779',
                                            neutral0: '#FAF5E8'
                                        }
                                    }
                                }}
                                styles={{
                                    container: (provided: any, state: any) => {
                                        return {
                                            ...provided,
                                            width: '100%',
                                            background: '#FAF5E8'
                                        }
                                    },
                                    control: (provided: any, state: any) => {
                                        return {
                                            ...provided,
                                            background: '#FAF5E8'
                                        }
                                    },
                                    singleValue: (provided: any, state: any) => {
                                        // const opacity = state.isDisabled ? 0.5 : 1;
                                        // const transition = 'opacity 300ms';

                                        return {
                                            ...provided,
                                            whiteSpace: 'normal'
                                        };
                                    }
                                }}
                            ></Select>
                            
                        </div>
                        </div>
                    </>
                })
            }
        </div>
    </Container>
}
