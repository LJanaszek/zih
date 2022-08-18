import styled from "styled-components"
import logoFirst from './img/krokodylKomp.svg';
import logoSec from './img/ministerstwoKomp.svg';
import logoSecMob from './img/ministerstwoMobilna.svg';
const Container = styled.footer`

    background: var(--color2);
    color: var(--color1);
    border: 1px solid;
    border-radius: 25px;
    width: 60%;
    margin: 0 auto;
    padding:0.5em;
    margin-bottom: 1em;
    font-family: DidactGothic-Regular;
    display: flex;

    @media (max-width: 1560px) {
        border:none;
        flex-direction: column-reverse;
        align-items: center;
    }
    @media(max-width: 950px){
        padding:0;
        width:80%;
    }
    @media(max-width: 490px){
    }
    
    .logo1,.logo2{
        height: 5em;
        margin:1em 2em;
        width: 50%;
        @media(max-width: 950px){
            margin: 0.5em 0.5em;
        }
        @media(max-width: 490px){
            margin:0;
        }
    }
    .logo1{
        width:40%;
        text-align: center;
        vertical-align:middle;
        background: url(${logoFirst})50% 50% no-repeat;
    }
    .logo2{
        width: 50%;
        text-align: center;
        vertical-align:middle;
        background: url(${logoSec})50% 50% no-repeat;
        
        @media (max-width: 1560px) {
            background: url(${logoSecMob})50% 50% no-repeat;
            // width: 40%;
            margin: 0 auto;
            padding:2.5em;
            
        }
        @media(max-width: 950px){
            margin:0 auto;
            margin-bottom: 0.5em;
        }
    }
    
    
`;

export default function PageFooter() {
    return <Container>
        <div className="logo1">

        </div>
        <div className="logo2">

        </div>
    </Container>
}
