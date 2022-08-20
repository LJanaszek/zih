import styled from "styled-components"

const Container = styled.header`

    text-align: center;
    vertical-align:middle;
    position: relative;
    background-color: var(--color3);
    border-radius: 50px;
    margin: 0 auto;
    margin-top:1em;

    @media(max-width: 800px) {
        width: 96%;
    }

    h1{
        display: inline-block;
        margin:0 auto;
        padding: .65em 1.2em;
        letter-spacing: -1px;
        font-family: Bristol;
        color: var(--color2);
        position: relative;

        font-weight: normal;
        font-size: 1.9rem;

        @media(max-width: 600px) {
            font-size: 1.5rem;
        }

        @media(max-width: 440px) {
            font-size: 1.1rem;
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
