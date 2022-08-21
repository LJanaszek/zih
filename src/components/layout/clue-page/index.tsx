import styled from "styled-components";

import { GeoStep } from "../../../modules/game/types";

import pointer from "../../../assets/pointer.svg";
import PageHeader from "../header";
import ScrollToTop from "../../../utils/widgets/scroll-to-top";

type Props = {
    step: GeoStep,
    clueImg: string,
    onComplete(): void
}

const Container = styled.div`
    top:0;
    width:100%;
    min-height:100vh;
    text-align: center;

    background:var(--color3);

    .congrat{
        color:white;
        font-size:24px;
    }

    .adres{
        color: var(--color1);
    }

    .content{
        display: block;
        margin: 0 auto;
        text-align: center;
    }

    .perazja{
        width: 20%;
        height:20%;
        margin:2em 0em;
        padding:3em;
        border:4px solid var(--color1);
        border-radius:50px;
        margin-top:0;
    }

    .pointer{
        margin-top:2em;
        width:10%;
    }

    @media (max-width: 1560px) {
        width:100%;
    }

`

export default function CluePage({ step, clueImg, onComplete }: Props) {
    return <Container>
        <ScrollToTop />
        <PageHeader theme={'violet'} />
        <div className="content">
            <img className="pointer" src={pointer} alt="" />
            <p className="adres">{step.name.join(`<br />`)}</p>

            <p className="congrat">Zadanie wykonane! <br /> znaleźliście karteczkę z literą:</p>
            <img className="perazja" src={clueImg} alt="P" />
        </div>
        <div className="button-wroc">
            <button className="button inverted" onClick={onComplete}>Powrót do mapy<i className="icon map" /></button>
        </div>
    </Container>
}
