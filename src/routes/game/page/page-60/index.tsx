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
        'width': '50%'

    }
    const styles2: CSS.Properties = {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'flex-start',
        'width': '50%',
        'position': 'absolute',
        'bottom': '1em',
        right: '0'

    }
    const Pstyles: CSS.Properties = {
        'width': 'auto',
        'margin': '0.2em',
        padding: '0.9em',
    }
    const Pstyles2: CSS.Properties = {
        'width': 'auto',
        'margin': '0.2em',
        padding: '0.9em',
        backgroundColor: 'unset',
        color: 'black'
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
                    No dobra, znam go na pamięć. Tak sobie chciałem pożartować, bo będę za Tobą tęsknił. Kod to: 1895#.
                </p>
            </div>
            <div style={styles2}>
                <p style={Pstyles2}>
                    Gratulacje! Udało Ci się ukończyć grę! Za pomocą otrzymanego kodu otwórz skrzynkę znajdującą się w holu Żydowskiego Instytutu Historycznego.
                </p>
            </div>

        </div>
    </TextPage>
}
