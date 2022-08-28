import styled from "styled-components";

type Props = React.PropsWithChildren<{}>;

const Container = styled.div`
    background: white;

    border-radius: 3em;
    padding: 1em 2em;



    @media(max-width: 500px) {

        border-radius: 3em;
    }
`;

export default function Box({ children }: Props) {
    return <Container>
        <div className="inner">
            {children}
        </div>
    </Container>
}
