// import { idText } from "typescript";
// import Box from "../../../../components/layout/box"
// import TextPage from "../../../../components/layout/text-page"
// import img1 from "../../img/memoryTest.jpg";
// import React from 'react';
import Box from '../../../../components/layout/box';
import Uirender from '../../../../components/memory/uiComponent';
type Props = {
    onNext(): void
}



export default function MemoryGame({onNext}:Props) {
  return (
    <Box>
      <p>
      Odkryj słowa w memo i zapamiętaj je. Przydadzą ci się w następnej zagadce. 
      </p>
    <Uirender onNext={onNext}/>
    </Box>
  )
}


