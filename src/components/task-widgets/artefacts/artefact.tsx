import styled from "styled-components";

type Props = {
    image: string,
    label: string | null,
    onClick(): void
}

const Container = styled.figure`
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;


    .img {
        flex: 0 1 90%;
        position: relative;
        background: 50% 50% no-repeat;
        background-size: contain;
    }

    .label {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-items: flex-start;

        p {
            margin: 0;
        }
    }
`;

export default function Artefact({ image, label, onClick }: Props) {
    return <Container className="artefact" onClick={onClick}>
        <div className="img" style={{ backgroundImage: `url(${image})` }}>
        </div>
        <div className="label">
            <p>{label || '\u00A0'}</p>
        </div>
    </Container>
}
