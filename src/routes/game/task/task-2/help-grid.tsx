import styled from "styled-components"

import help1Src from './help/bird1.png';
import help2Src from './help/bird2.png';
import help3Src from './help/bird3.png';
import help4Src from './help/bird4.png';
import help5Src from './help/bird5.png';
import help6Src from './help/bird6.png';
import help7Src from './help/bird7.png';
import help8Src from './help/bird8.png';
import help9Src from './help/bird9.png';
import help10Src from './help/bird10.png';

const Container = styled.div`
    display: grid;
    gap: 10px;

    @media(orientation: portrait) {
        grid-template-columns: 1fr 1fr;
    }

    @media(orientation: landscape) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`;

export default function HelpGrid() {
    return <Container>
        <img src={help1Src} alt="" />
        <img src={help2Src} alt="" />
        <img src={help3Src} alt="" />
        <img src={help4Src} alt="" />
        <img src={help5Src} alt="" />
        <img src={help6Src} alt="" />
        <img src={help7Src} alt="" />
        <img src={help8Src} alt="" />
        <img src={help9Src} alt="" />
        <img src={help10Src} alt="" />
    </Container>
}
