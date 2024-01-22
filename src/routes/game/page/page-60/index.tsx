import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
import CSS from "csstype"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    const styles: CSS.Properties = {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'flex-start',
        'width':'50%'

    }
    const Pstyles: CSS.Properties = {
        'width': 'auto',
        'margin': '0.2em',
        padding: '0.9em',
    }


    return <TextPage>
        <div className="page-view" >
            <img className='page-img' src={slonimski} alt="" />
            <div style={styles}>
            <p style={Pstyles}>
                Mam!
            </p>
            <p style={Pstyles}>
            Ach nie, to bilet na tramwaj i jakieś paprochy.
            </p>
            <p style={Pstyles}>
            No dobra, znam go na pamięć. Tak sobie chciałem pożartować, bo będę za Tobą tęsknił. Kod to: 1895 
            </p>
            </div>

        </div>
        {/* <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div> */}
    </TextPage>
}
