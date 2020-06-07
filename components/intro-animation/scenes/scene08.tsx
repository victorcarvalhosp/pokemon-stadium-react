import styles from './scene08.module.scss'

export default function Scene08() {
    return (
            <div className={`${styles.scene}`}>
                <div className={styles.borderLeft}></div>
                <div className={styles.borderRight}></div>
                <div className={styles.center}><img className={styles.position}
                                                    src="/images/hooh.gif"/>
                </div>
            </div>)
}
