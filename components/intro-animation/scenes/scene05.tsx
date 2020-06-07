import styles from './scene05.module.scss'

export default function Scene05() {
    return (
            <div className={`${styles.scene}`}>
                <div className={styles.borderLeft}></div>
                <div className={styles.borderRight}></div>
                <div className={styles.center}><img className={styles.position}
                                                    src="/images/umbreon.gif"/>
                </div>
            </div>)
}
