import styled from "styled-components"

const Container = styled.header`
    
    text-align: center;
    vertical-align:middle;
    position: relative;
    background-color: var(--color3);
    border-radius: 50px;
    padding: 1.5em 2em;
    width: 50%;
    margin: 0 auto;
    margin-top:1em;
    @media(max-width: 950px){
        width:max-content;
        font-size:18px;
    }
    @media(max-width: 490px){
        width:60%;
        padding:0.8em 0.6em;
        border-radius:45px;
        
    }
    h1{
        margin:0 auto;
        letter-spacing: 3px;
        font-family: Bristol;
        color: var(--color2);
        font-size: 30px;
        position: relative;
        // width: max-content;

        @media(max-width: 490px){
            font-size: 16px;
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
