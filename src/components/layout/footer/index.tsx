import styled from "styled-components"
import logoFirst from './img/krokodylKomp.svg';
import logoSec from './img/ministerstwoKomp.png';
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
        padding:1em 0em;
    }
    .logo1{
        margin-left: 6em;
        width:10%;
        text-align: center;
        vertical-align:middle;
        @media(max-width: 1560px){
            width:20%;
            margin:0;
        }
        @media(max-width: 950px){
            padding:0;
            width:30%;
            margin:0 auto;
            margin-bottom: 0.5em;
        }
        
    }
    .logo2{
        height: auto;
        text-align: center;
        vertical-align:middle;
        width:40%;
        margin: 0 auto;
        
        @media (max-width: 1560px) {
            // padding:2.5em;
            width:70%;
            
        }
        @media(max-width: 950px){
            padding:0;
            width:100%;
            height:40%; 
            margin:0 auto;
            margin-bottom: 0.5em;
        }
        @media(max-width: 750px){

        }
    }
    .mkid{
        margin-left:10%;
        display:flex;
        width:50%;
        text-align: center;
        height: 30%;
        width:70%;
        p{
            font-size:16px;
            margin: auto;
            text-align: left;
            margin-left:1em;
        }
        @media(max-width: 1560px){
            display:block;
            margin:0;
            margin-bottom: 1em;
            width:60%;
            p{
                width:auto;
            }
        }
    }
    
`;

export default function PageFooter() {
    return <Container>
        <img className="logo1" src={logoFirst} alt="Brunon Schultz, artysta genialny"/>
        <div className="mkid">
        <img className="logo2" src={logoSec} alt="Ministerstwo Kultury i Dziedzictwa Narodowego. Dofinansowano ze środków Ministra Kultury i DziedzictwaNarodowego pochodzących z Funduszu Promocji Kultury – państwowego funduszu celowego"/>
        <p>Dofinansowano ze środków Ministra Kultury i Dziedzictwa Narodowego pochodzących z Funduszu Promocji Kultury – państwowego funduszu celowego</p>
        </div>
    </Container>
}
