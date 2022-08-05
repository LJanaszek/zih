import styled from "styled-components"

const Container = styled.footer`

    background: var(--color2);
    color: var(--color1);
    border: 1px solid;
    border-radius: 40px;
    height: 7em;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding:0.5em;
    margin-bottom: 1em;
    font-family: DidactGothic-Regular;
`;

export default function PageFooter() {
    return <Container>
        <p>A tutaj jest jakaś stopka i obrassssski :D</p>
    </Container>
}
