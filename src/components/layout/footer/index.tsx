import { Link } from "react-router-dom";
import styled from "styled-components"
import { getAccessibilityRoute, getPolicyRoute } from "../../../routes/routes";
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
        width:80%;
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
            margin:0 auto;
            margin-bottom: 0.5em;
            width: 50%;
        }
        @media(max-width: 500px){
            width: 60%;
        }

    }
    .logo2{
        height: auto;
        text-align: center;
        vertical-align:middle;
        width:35%;
        margin: 0 auto;

        @media (max-width: 1439px) {
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

        bottom:0;
        width:65%;
        height:3em;
        background: var(--color1);
        border-radius: 80px 80px 0 0;

        @media(max-width: 1439px){
            width:70%;
            padding:0 2em;
            height: 2.5em;
        }

        a {
            display: grid;
            margin: auto;
            text-decoration: none;
            color: white;

            &:first-child{
                grid-column:1;
            }

            &:last-child{
                grid-column:2;
            }
        }

        @media(max-width: 1439px){

            width:70%;
            padding:0 2em;
            height: 2.5em;

            a {
                font-size: 16px;
            }
        }

        @media(max-width: 500px) {
            width: 100%;
            padding: 0;
        border-radius: 00;
        }
    }

`;

export default function PageFooter() {
    return <Container>
        <div className="footer">
            <img className="logo1" src={logoFirst} alt="Brunon Schultz, artysta genialny" />
            <div className="mkid">
                <img className="logo2" src={logoSec} alt="Ministerstwo Kultury i Dziedzictwa Narodowego." />
                <p>Dofinansowano ze środków Ministra Kultury i Dziedzictwa Narodowego pochodzących z Funduszu Promocji Kultury – państwowego funduszu celowego</p>
            </div>
        </div>
        <div className="privacy">
            <Link to={getPolicyRoute()}>polityka prywatności</Link>
            <Link to={getAccessibilityRoute()}>deklaracja dostępności</Link>
        </div>
    </Container>
}
