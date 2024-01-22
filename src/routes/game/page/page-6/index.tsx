// import { idText } from "typescript";
// import Box from "../../../../components/layout/box"
// import TextPage from "../../../../components/layout/text-page"
// import img1 from "../../img/memoryTest.jpg";
// import React from 'react';
import Box from '../../../../components/layout/box';
import Uirender from '../../../../components/memory/uiComponent';
import CSS from "csstype"
type Props = {
    onNext(): void
}
const style:CSS.Properties ={
  "backgroundColor": "var(--color2)",
  'width': '100%',

}


export default function MemoryGame({onNext}:Props) {
  return <div className='memory'>
      <p style={style}>
      Odkryj słowa w memo i zapamiętaj je. Przydadzą ci się w następnej zagadce. 
      </p>
    <Uirender onNext={onNext}/>
    </div>
  
}


