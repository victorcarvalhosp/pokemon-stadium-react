import styles from './screen.module.scss'
import Layout from "../layout";

export default function Screen({children, on, showContent}: {
    children: React.ReactNode
    on: boolean, showContent: boolean
}) {
    return <>
        <div className="row">
            <div className={`flex-item ${styles.container} ${on && !showContent ? styles.flicker : ''}`}>
                <div className={`${styles.overlay} ${on ? styles.overlayOn : ''}`}>AV-1</div>
                <div className={`${styles.screen} ${styles.containerFlicker} ${on ? styles.turnOn : styles.turnOff}`}>{showContent ? children : ``}</div>
            </div>
        </div>
    </>
}
