import Box from "../../../../components/layout/box"
import TextPage from "../../../../components/layout/text-page"
import slonimski from "../../../../assets/slonimski.png"
type Props = {
    onNext(): void
}

export default function Page1({ onNext }: Props) {
    return <TextPage>
        <div className="page-view">
        <img className='page-img' src={slonimski} alt="" />

            <p>
                Litery hebrajskiego alfabetu mają fantazyjne kształty. Ale i nasz alfabet to nie w kij dmuchał. Albo nie w „I” dmuchał. Chcesz poznać drugą literę szyfru? To spójrz na litery inaczej niż zwykle.
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
