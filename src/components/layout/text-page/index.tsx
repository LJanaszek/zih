import styled from "styled-components";

const TextPage = styled.div`
    padding: 1rem;

    h2 {
        padding: 1em 1.5em;
        margin: 0;
    }

    p.before-list {
        padding-bottom: 0;
        margin-bottom: 0;
    }

    ul.after-p {
        padding-top: 0;
        margin-top: 0;
    }

    @media(max-width: 500px) {
        padding: 1rem .5em;
    }

    img {
        width: 100%;

        margin: 1rem 0;
    }

    figure {
        margin: 0;

        blockquote {
            font-size: 1.2em;
            margin: 0;
            font-style: italic;
            text-align: center;
        }

        figcaption {
            font-size: .8em;
            text-align: right;
            font-style: italic;
            padding-right: 1em;
        }
    }

    li::marker{
        color:var(--color1);
    }
`

export default TextPage;
