import styled from "styled-components"

const Container = styled.footer`

    background: var(--color3);
    color: var(--color2);
`;

export default function PageFooter() {
    return <Container>
        <p>A tutaj jest jakaś stopka</p>
    </Container>
}
