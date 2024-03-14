import { useMemo } from "react";
import styled from "styled-components";
import compassIcon from '../../../assets/icons/kierunek.svg';

type Props = {
    distance: number,
    name: string[],
    bering: number,
    additional?: string
}

const Container = styled.div`
    background: white;
    border-radius: 5rem;

    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    .inner {
        padding: 4rem 4rem 1rem;
        background: url(${compassIcon}) 50% 1rem no-repeat;
        background-size: auto 2rem;

        text-align: center;
        line-height: 2em;
    }

    .adress {
        display: flex;
        flex-direction: column;

        font-weight: bold;
    }

    @media (max-width: 1200px) {
        border-radius: 0;
        border-top: 10px solid var(--color3);

        .inner {
            padding: 4rem 2rem 1rem;
        }
    }
`;

export default function GeoInfo({ distance, name, bering, additional }: Props) {

    const direction = useMemo(() => {
        if (bering < 22.5) {
            return 'północ';
        } else if (bering < 67.5) {
            return 'północny-wschód';
        } else if (bering < 112.5) {
            return 'wschód';
        } else if (bering < 157.5) {
            return 'południowy-wschód';
        } else if (bering < 202.5) {
            return 'południe';
        } else if (bering < 247.5) {
            return 'południowy-zachód';
        } else if (bering < 292.5) {
            return 'zachód';
        } else if (bering < 337.5) {
            return 'północny-zachód';
        } else {
            return 'północ';
        }
    }, [bering]);
    // console.log(additional[0], "=============")
    return <Container>
        <div className="inner">
            Aby dojść do<br />
            <div className="adress">
                {name[0] && <span dangerouslySetInnerHTML={{__html: name[0]}}></span>}
                {name[1] && <span dangerouslySetInnerHTML={{__html: name[1]}}></span>}
            </div>
            kieruj się <strong>{Math.round(distance)}m.</strong> na{'\u00A0'}<strong style={{whiteSpace: 'nowrap'}}>{direction}</strong><br />
            <p>{additional}</p>
        </div>
    </Container>
}
