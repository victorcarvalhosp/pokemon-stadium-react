import styles from './scene06.module.scss'

export default function Scene06() {
    return (
            <div className={`${styles.scene}`}>
                <div className={styles.spotlight}></div>
                <div className={styles.center}><img className={styles.position}
                                                    src="/images/pichu.gif"/>
                </div>
            </div>)
}
