import styled from "styled-components";
import Taskimg from "../img/taskImages/task2.jpg"
import useRemoveFooter from "../../../../modules/main/hooks/use-remove-footer";
import TaskIntroTemplate from "../../../../components/layout/task-intro";
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
    useRemoveFooter();

    return <>
        <TaskIntroTemplate
            onComplete={onComplete}
            image={Taskimg}
            title="Portal do willi Feiner"
        >
            <h2>Szukaj ukrytego</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus alias quia asperiores natus iusto, pariatur ab provident officiis veniam culpa, distinctio consequatur accusamus, porro autem itaque omnis et? Repellendus, velit?</p>

        </TaskIntroTemplate>
    </>
}
