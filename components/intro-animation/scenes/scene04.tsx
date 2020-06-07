import styles from './scene04.module.scss'

export default function Scene04() {
    return (
            <div className={`${styles.scene}`}>
                <div className={styles.borderTop}></div>
                <div className={styles.borderBottom}></div>
                <div className={styles.center}><img className={styles.position} src="/images/skarmory.gif"/>
                </div>
            </div>)
}
