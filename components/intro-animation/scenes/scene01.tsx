import styles from './scene01.module.scss'

export default function Scene01() {
    return (
            <div className={`${styles.scene}`}>
                <div className={styles.borderLeft}></div>
                <div className={styles.borderRight}></div>
                <div className={styles.center}><img className={styles.position}
                                                    src="/images/scizor.gif"/>
                </div>
            </div>)
}
