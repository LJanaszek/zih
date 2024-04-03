import cryptex from "../../../../assets/cryptex.png"

type Props = {
    onNext(): void;
};
export default function Page1({ onNext }: Props) {
    return <>
       <div>
            <h2>Cryptext</h2>
            
            <div className="cryptex3">
                <div className="crypInside">
                    <div className="crypImgLeft"> <img src={cryptex} alt="" /></div>
                    <div className="crypBlock crypNum"><p></p></div>
                    <div className="crypBlock"><p></p></div>
                    <div className="crypBlock"><p></p></div>
                    <div className="crypBlock"><p></p></div>
                    <div className="crypBlock"><p></p></div>
                    <div className="crypImgRight"> <img src={cryptex} alt="" /></div>
                </div>
                
            </div>
            
            </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </>

}


