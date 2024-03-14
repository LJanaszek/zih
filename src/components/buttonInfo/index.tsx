import img1 from "../../assets/icons/info.svg";
import styles from "./style.module.scss"
type Props = React.PropsWithChildren<{
    onOKClick?(): void
}>;
export default function ButtonInfo({ onOKClick }: Props){
    return  <button type="button" className={styles.buttonInfoPopup} onClick={onOKClick}><img src={img1} alt=""/></button>
}