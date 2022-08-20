import { useNavigate } from "react-router-dom";
import { getGamePageRoute } from "../../../routes";
import { useCallback, useState } from "react";
import Box from "../../../../components/layout/box";
import styled from "styled-components";
import pointer from "../img/pointer.svg";
import Taskimg from "../img/taskImages/task1.svg";
import startTask from "../img/startTask.svg";
import useRemoveFooter from "../../../../modules/main/hooks/use-remove-footer";
import Popup from "../../../../components/elements/task-popup";
const Container = styled.div`

.content{
    width:100%;
    background-color:var(--color2);
    text-align:center;
}
.pointer{
    width:10%;
    margin-top:2em;
}
.tekst{
    width:80%;
    background:white;
    margin: 0 auto;
    padding: 0.5em 1em;
    border-radius: 50px;
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
type Props = {
    onComplete(): void
}

export default function TaskIntro({ onComplete }: Props) {

    const [showGPSInfo, setShowGPSInfo] = useState(false);
    const navigate = useNavigate()
    const goToGame = useCallback(() => {
        navigate(getGamePageRoute())
    }, [navigate]);

    useRemoveFooter()
    return <Container>
        <Box>
            <div className="content">
                <img className="pointer" src={pointer} alt="" />
                <p className="title">"ul.Krokodyli" - Walcownicza daw. Handlowa</p>
                <img className="taskImg" src={Taskimg} alt="" />
                <div className="tekst">
                    <h2>Szukaj ukrytego</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus alias quia asperiores natus iusto, pariatur ab provident officiis veniam culpa, distinctio consequatur accusamus, porro autem itaque omnis et? Repellendus, velit?</p>
                </div>
                <button className="button" onClick={onComplete}>Uruchom zadanie <i className="icon help" /></button>
                <button className="button" onClick={() => { setShowGPSInfo(true) }}>Pomoc <i className="icon help" /></button>
            </div>
            {showGPSInfo && <Popup onClick={() => { setShowGPSInfo(false) }}>
                <p>
                    Gra wykorzystuje technologię rozszerzonej rzeczywistości. <br /><br />
                    Jeśli chcesz wykonać to zadanie, prosimy, wyraź zgodę na dostęp do kamery.
                </p>
            </Popup>}
        </Box>
    </Container>
}
