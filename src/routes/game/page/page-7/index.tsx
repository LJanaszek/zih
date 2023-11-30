import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"

type Props = {
    onNext(): void;
};
export default function Page1({ onNext }: Props) {
    // let list = ["A","B","C","D","E","F"];
    // document.getElementById('crypText')!.innerHTML = list[0];
    return <TextPage>
        <Box>
            <h2>Cryptext</h2>

            <div className="">
                <button onClick={()=>{crypUp()}}>arrow up</button>
                    <h3 id="crypText">A</h3>
                <button onClick={()=>{crypDown()}}>arrow down</button>
            </div>
            



        </Box>
        <div className="button-list">
            <button className="button" onClick={onNext}>Przejdź do mapy<i className="icon map" /></button>
        </div>
    </TextPage>
}
var n = 0
function crypUp(){
    n++
    if (n===5){
        n = 0
    };
    let list = ["A","B","C","D","E","F"];
    document.getElementById('crypText')!.innerHTML = list[n];
    
}

function crypDown(){
    n--
    if (n<0){
        n = 5
    };
    let list = ["A","B","C","D","E","F"];
    document.getElementById('crypText')!.innerHTML = list[n];
    
}