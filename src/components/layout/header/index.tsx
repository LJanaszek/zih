import styled from "styled-components"

type Props = {
    theme?: 'normal' | 'violet'
}

const Container = styled.header<{theme: 'normal' | 'violet'}>`

    text-align: center;
    vertical-align:middle;
    position: relative;
    margin: 0 auto;

    padding-top: 1rem;

    @media(max-width: 800px) {
        width: 96%;
    }

    h1{
        display: inline-block;
        margin:0 auto;
        background-color: ${({theme}) => theme ==='violet' ? 'white' : 'var(--color3)'};

        padding: .65em 1.2em;
        letter-spacing: -1px;
        font-family: Bristol;
        border-radius: 50px;
        color: ${({theme}) => theme ==='violet' ? 'var(--color3)' : 'var(--color2)'};
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

export default function PageHeader({theme}: Props) {
    return <Container theme={theme || 'normal'}>
        <h1>Z <span className="shultz">Schulzem</span> przez Falenicę</h1>
    </Container>
}
