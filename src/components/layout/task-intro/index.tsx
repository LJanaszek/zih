import React, { ReactElement } from "react";
import styled from "styled-components";
import Box from "../box";
import pointer from "./pointer.svg";

type Props = {
    image: string,
    addButtons?: ReactElement[],
    onComplete(): void
}

const Container = styled.div`
    .content{
        width:100%;
        text-align:center;
    }
    .pointer{
        width:10%;
        margin-top:2em;
    }
    .taskImg{
        width:85%;
        margin: auto;
        border-radius:50px;
        margin-bottom: 1em;
        margin-top:1em;
    }
    .title{
        color:var(--color1);
    }
`

export default function TaskIntroTemplate({ image, onComplete, children, addButtons }: React.PropsWithChildren<Props>) {
    console.log(addButtons);
    return <Container>
        <div className="content">
            <img className="pointer" src={pointer} alt="" />
            <p className="title">"ul.Krokodyli" - Walcownicza daw. Handlowa</p>
            <img className="taskImg" src={image} alt="" />
            <Box>{children}</Box>
            <div className="button-list">
                <>
                    <button className="button" onClick={onComplete}>Uruchom zadanie <i className="icon help" /></button>
                    {addButtons}
                </>
            </div>
        </div>
    </Container>
}
