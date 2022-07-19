import styled from "styled-components";

type Props = React.PropsWithChildren<{}>;

const Container = styled.div`
    background: white;
`;

export default function Box({ children }: Props) {
    return <Container>
        <div className="inner">
            {children}
        </div>
    </Container>
}
