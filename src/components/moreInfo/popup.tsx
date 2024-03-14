import styles from './popus.module.scss';

type Props = React.PropsWithChildren<{
    onOKClick?(): void
}>;


export function Popup({ children, onOKClick }: Props) {
    return <div className={styles.popup} aria-modal="true">

        <div className={styles.inner}>
            {children}
            <button type={"button"} className={styles.button} onClick={onOKClick}></button>
        </div>
    </div>
}
