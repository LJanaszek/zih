import styled from "styled-components"
import logoFirst from './img/krokodylKomp.svg';
import logoSec from './img/ministerstwoKomp.svg';
import logoSecMob from './img/ministerstwoMobilna.svg';
const Container = styled.footer`

    background: var(--color2);
    color: var(--color1);
    border: 1px solid;
    border-radius: 25px;
    width: 80%;
    margin: auto;
    padding:0.5em;
    font-family: DidactGothic-Regular;
    display: flex;
    text-align: center;
    margin-bottom:1em;
    padding: 1em;

    @media (max-width: 1560px) {
        border:none;
        flex-direction: column-reverse;
        align-items: center;
    }
    @media(max-width: 950px){
        padding:0;
        // width:80%;
    }
    
    .logo1,.logo2{
        height: 5em;
        margin:0 auto;
        width:50%;
        height:50%;
    }
    .logo1{
        width:10%;
        text-align: center;
        vertical-align:middle;
        
    }
    .logo2{
        height: auto;
        text-align: center;
        vertical-align:middle;
        
        
        @media (max-width: 1560px) {
            padding:2.5em;
            
        }
        @media(max-width: 950px){
            // margin:0 auto;
            // margin-bottom: 0.5em;
        }
    }
    
    
`;

export default function PageFooter() {
    return <Container>
        <img className="logo1" src={logoFirst} alt="Brunon Schultz, artysta genialny"/>
        <img className="logo2" src={logoSec} alt="Ministerstwo Kultury i Dziedzictwa Narodowego. Dofinansowano ze środków Ministra Kultury i DziedzictwaNarodowego pochodzących z Funduszu Promocji Kultury – państwowego funduszu celowego"/>
    </Container>
}
