import styled from "styled-components"

const Container = styled.header`
    min-height: 100px;
`;

export default function PageHeader() {
    return <Container>
        <h1>To jest jakiś nagłówek</h1>
    </Container>
}
