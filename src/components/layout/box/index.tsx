import styled from "styled-components";

type Props = React.PropsWithChildren<{}>;

const Container = styled.div`
    background: white;

    
    padding: 1em 2em;



    @media(max-width: 500px) {

    }

    h2, h3 {
        text-align: center;
        font-weight: normal;
        color: var(--color1);
    }
`;

export default function Box({ children }: Props) {
    return <Container>
        <div className="inner">
            {children}
        </div>
    </Container>
}
