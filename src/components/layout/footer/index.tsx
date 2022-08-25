import styled from "styled-components"
import logoFirst from './img/krokodylKomp.svg';
import logoSec from './img/ministerstwoKomp.png';
const Container = styled.footer`
    .footer{
        background: var(--color2);
        color: var(--color1);
        border: 1px solid;
        border-radius: 40px;
        width: 58%;
        margin: auto;
        font-family: DidactGothic-Regular;
        display: flex;
        text-align: center;
        margin-bottom:3em;
        padding:0.5em 0em;
    
    
    @media (max-width: 1439px) {
        border:none;
        flex-direction: column-reverse;
        align-items: center;
    }
    @media(max-width: 950px){
        padding:0;
        // width:80%;
    }}

    .logo1,.logo2{
        padding:1em 0em;
    }
    .logo1{
        margin-left: 4.5em;
        width:13%;
        text-align: center;
        vertical-align:middle;
        @media(max-width: 1439px){
            width:20%;
            margin:0;
        }
        @media(max-width: 950px){
            padding:0;
            // width:30%;
            margin:0 auto;
            margin-bottom: 0.5em;
        }

    }
    .logo2{
        height: auto;
        text-align: center;
        vertical-align:middle;
        width:35%;
        margin: 0 auto;

        @media (max-width: 1439px) {
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
        // height: 30%;
        width:70%;
        p{
            font-size:10px;
            line-height:15px;
            margin: auto;
            text-align: left;
            margin-left:1em;
            margin-right:5em;
        }
        @media(max-width: 1439px){
            display:block;
            margin:0;
            margin-bottom: 1em;
            width:60%;
            p{
                width:100%;
            }
        }

    }
    .privacy{
        margin:auto;
        display: grid;
        text-align: center;
        // margin: 0 auto;
        // position: absolute;
        bottom:0;
        width:50%;
        height:4em;
        background: var(--color1);
        border-radius: 80px 80px 0 0;
        @media(max-width: 1439px){
            width:70%;
            padding:0 2em;
            height: 2.5em;
        }
    }
    .privacy > a{
        display: grid;
        margin: auto;
        text-decoration: none;
        color: white;
        @media(max-width: 1439px){
            font-size: 16px;
        }
    }
    a:first-child{
        grid-column:1;
    }
    a:last-child{
        grid-column:2;
    }

`;

export default function PageFooter() {
    return <Container>
        <div className="footer">
        <img className="logo1" src={logoFirst} alt="Brunon Schultz, artysta genialny"/>
        <div className="mkid">
        <img className="logo2" src={logoSec} alt="Ministerstwo Kultury i Dziedzictwa Narodowego."/>
        <p>Dofinansowano ze środków Ministra Kultury i Dziedzictwa Narodowego pochodzących z Funduszu Promocji Kultury – państwowego funduszu celowego</p>
        </div>
        </div>
        <div className="privacy">
                    <a href="#">polityka prywatności</a>
                    <a href="#">deklaracja dostępności</a>
        </div>
    </Container>
}
