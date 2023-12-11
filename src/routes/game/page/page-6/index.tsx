// import { idText } from "typescript";
// import Box from "../../../../components/layout/box"
// import TextPage from "../../../../components/layout/text-page"
// import img1 from "../../img/memoryTest.jpg";
// import React from 'react';
import Uirender from '../../../../components/memory/uiComponent';
type Props = {
    onNext(): void
}



export default function MemoryGame({onNext}:Props) {
  return (
    <>
    <Uirender onNext={onNext}/>
    <div className="button-list">
    
    </div>
    </>
  )
}

// export default MemoryGame;
// export default function Page1({ onNext }: Props) {
//     return <TextPage>
//         <Box>
//             <div className="memoryImages">
//             <button id="1" onClick={(a)=>{reveall(a)}}><img src={img1} alt="" /></button>
//             <div id="2"><img src={img1} alt=""/></div>
//             <div id="3"><img src={img1} alt=""/></div>
//             <div id="4"><img src={img1} alt=""/></div>
//             <div id="5"><img src={img1} alt=""/></div>
//             <div id="6"><img src={img1} alt=""/></div>
//             </div>
//         </Box>
//         <div className="button-list">
//             <button className="button" onClick={onNext}>Przejdź do mapy<i className="icon map" /></button>
//         </div>
//     </TextPage>
// }
