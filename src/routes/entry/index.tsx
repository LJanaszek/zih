
import { Link } from "react-router-dom"
import slonimski from "./slonimski.png"
import TextPage from "../../components/layout/text-page"
import { getGamePageRoute } from "../routes"
import style from "./entry.module.scss"
type Props = {
    onNext(): void
}

export default function Page1() {
    return <TextPage>
        <div className={style.entryView}>
            <img className={style.pageImg} src={slonimski} alt="" />
            <p>
            <b>Antoni Słonimski</b> to złośliwy i błyskotliwy poeta. Niedługo będzie obchodził 130. rocznicę urodzin. Pisał teksty i w prozie, i wierszem, i nawet dramaty. Ilość szła w parze z jakością, a przynajmniej tak uważa wiele mądrych głów, co się znają na literaturze. 
            </p>
        </div>
        <div className={style.borderPadding}>
            <p className={style.border}>
            Pochodził z rodziny żydowskiej, która przeszła z judaizmu na katolicyzm. W domu Słonimscy mówili po polsku. No, poza lekcjami hebrajskiego, które ojciec zorganizował małemu Antosiowi.
            </p>
        </div>
        <div className="button-list">
            <Link to={getGamePageRoute()} className="button-hand" />
        </div>
    </TextPage>
}
