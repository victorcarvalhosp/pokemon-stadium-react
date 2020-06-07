import styles from './scene07.module.scss'

export default function Scene07() {
    return (
            <div className={`${styles.scene}`}>
                <div className={styles.borderTop}></div>
                <div className={styles.borderBottom}></div>
                <div className={styles.center}><img className={styles.position} src="/images/lugia.gif"/>
                </div>
            </div>)
}
