import styled from "styled-components"
import logoFirst from './img/krokodylKomp.svg';
import logoSec from './img/krokodylKomp.svg';
const Container = styled.footer`

    background: var(--color2);
    color: var(--color1);
    border: 1px solid;
    border-radius: 40px;
    // height: 7em;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding:0.5em;
    margin-bottom: 1em;
    font-family: DidactGothic-Regular;
    display: fex;


    .logos, .text{
        width: 50%;
    }
    .logos{
        text-align: center;
        // height: 7em;
        vertical-align:middle;
    }
    .logo{
        // display: block;
        margin: 0 auto;
        width:30%;
        // vertical-align: middle;
        position: relative;
        top:10%;
    }
    
`;

export default function PageFooter() {
    return <Container>
        <div className="logos">
            <img className="logo" src={logoFirst} alt="" />
            {/* <img className="logo" src={logoSec} alt="" />odległość boki: gora/dol: */}
        </div>
        <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid eaque vitae deleniti saepe quae sapiente totam corporis asperiores. Deleniti est labore cum fugiat odit laboriosam! Doloremque nostrum dolor atque cumque!</p>
        </div>
    </Container>
}
