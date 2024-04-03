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
                Coś jeszcze?
            </p>
            <p style={Pstyles}>
                Ach, no tak. Nie dałem Ci kodu!
            </p>
            <p style={Pstyles}>
                Gdzie ja go miałem…
            </p>
            <p style={Pstyles}>
            Chwileczkę, muszę przeszukać wszystkie kieszenie mojego surduta…
            </p>
            </div>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
