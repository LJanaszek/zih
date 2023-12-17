import styled from "styled-components"

const Container = styled.header`

    text-align: center;
    vertical-align:middle;
    position: relative;
    margin: 0 auto;
    font-size: 10px;
    width: 90%;
    margin: 1em;

    h1{
        display: inline-block;
        border-radius: 1em;
        padding: .5em 1em;
        background-color: var(--color3);
        margin:0 auto;
        letter-spacing: 1px;
        font-family: Bristol;
        color: var(--color2);
        position: relative;

        line-height: 1em;
        font-size: 1em;
    }

    .shultz{
        color: var(--color1);
    }
`;

export default function SmallPageHeader() {
    return <Container>
        <h1>Projekt ŻIH</h1>
    </Container>
}
