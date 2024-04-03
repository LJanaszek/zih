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
                Chyba Cię nie doceniałem, dobra robota! Następny przystanek: plac Teatralny.
                Została Ci jedna obręcz krypteksu. Zaraz zasmakujesz najsłodszych nektarów i ananasów tryumfu. Ale wiedz, że w życiu poety bywają i łyżki dziegciu, a gorycz ta dosięga Cię w najmniej spodziewanych momentach.
            </p>

        </div>
        <div className="button-list">
            <button className="button-hand" onClick={onNext}></button>
        </div>
    </TextPage>
}
