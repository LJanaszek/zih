import styled from "styled-components";

const TextPage = styled.div`
    padding: 1rem;

    h2 {
        padding: 1em 1.5em;
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
`

export default TextPage;
