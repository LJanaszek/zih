import Box from "../../../../components/layout/box"
import styled from "styled-components";
import useRemoveHeader from "../../../../modules/main/hooks/use-remove-header";
import Zimg from "../img/Z.svg";
import pointer from "../img/pointer.svg";
import back from "../img/back.svg";
const Container = styled.div`
position: absolute;
top:0;
width:90%;
min-height:100%;
background:var(--color3);
text-align: center;
#root{
    background: black;
}
inner{
    background:var(--color3);
}
main{
    background:var(--color3);
}
header{
    text-align: center;
    vertical-align:middle;
    position: relative;
    background-color: white;
    border-radius: 50px;
    padding: 1.5em 2em;
    width: 50%;
    margin: 0 auto;
    margin-top:1em;
    @media(max-width: 950px){
        width:max-content;
        font-size:18px;
    }
    @media(max-width: 490px){
        width:60%;
        padding:0.8em 0.6em;
        border-radius:45px;

    }
}
h1{
        margin:0 auto;
        letter-spacing: 3px;
        font-family: Bristol;
        color: var(--color3);
        font-size: 30px;
        position: relative;
        // width: max-content;

        @media(max-width: 490px){
            font-size: 16px;
        }
    .shultz{
            color: var(--color1);
        }
}
.congrat{
    color:white;
    font-size:24px;
}
.adres{
    color: var(--color1);
}
.content{
    display: block;
    margin: 0 auto;
    text-align: center;
}
.back{
    display: flex;
    font-family:Gothic;
    padding: 0.5em 2em;;
    margin: 0 auto;
    border-radius: 50px;
    border:none;
    font-size: 24px;
    margin-bottom: 1em;
    color: var(--color3);
    @media(max-width: 490px){
        width:60%;
        padding:0.8em 0.6em;
        border-radius:45px;
        .back-image{
            padding:.3em;
        }
    }

}
.perazja{
    width: 20%;
    height:20%;
    margin:2em 0em;
    padding:3em;
    border:4px solid var(--color1);
    border-radius:50px;
    margin-top:0;
}
@media (max-width: 1560px) {
    width:100%;
}
.pointer{
    margin-top:2em;
    width:10%;
}
.back-image{
    background: url(${back}) 100% 100% no-repeat;
}
i{
    height:1em;
    width:1em;
    margin: auto;
    margin-left:.5em;
    // margin-bottom:1em;
}
.button-wroc{
    display: flex;
}
`

type Props = {
    onComplete(): void
}

export default function TaskPlot({onComplete}: Props) {
    useRemoveHeader();
    return <Box>
    <Container>
        <header><h1>Z <span className="shultz">Schulzem</span> przez Falenicę</h1></header>
        <div className="content">
        <img className="pointer" src={pointer} alt="" />
        <p className="adres">Budynek dawnej stacji Falenica <br/> (Kolej Jabłonowska) -<br/>- kolej wąsk torowa</p>

        <p className="congrat">Zadanie wykonane! <br/> znaleźliście karteczkę z literą:</p>
        <img className="perazja" src={Zimg} alt="P" />
        </div>
        <div className="button-wroc">
        <button className="back" onClick={onComplete}>Powrót do mapy <i className="back-image"/></button>
        </div>
        </Container>
        </Box>
}
