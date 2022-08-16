import styled from "styled-components"

const Container = styled.header`
    
    text-align: center;
    vertical-align:middle;
    // margin: 0 auto;
    margin-top: 2em;
    height: 3.5em;
    position: relative;
    // width: inherit;
   
    h1{
        letter-spacing: 3px;
        border-radius: 50px;
        font-family: Bristol;
        // min-height: 10px;
        background-color: var(--color3);
        color: var(--color2);
        font-size: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width:max-content;
        padding: 1em 2em;
        width: max-content;

        @media(max-width: 950px){
            width:max-content;
            font-size:18px;
            margin-top:-1em;
        }
        @media(max-width: 300px){
            width:70%;
        }
    }
    .shultz{
        color: var(--color1);
    }
`;

export default function PageHeader() {
    return <Container>
        <h1>Z <span className="shultz">Schulzem</span> przez Falenicę</h1>
    </Container>
}
