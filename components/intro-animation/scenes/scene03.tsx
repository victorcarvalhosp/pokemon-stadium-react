import styles from './scene03.module.scss'

export default function Scene03() {
    return (
            <div className={`${styles.scene}`}>
                <div className={styles.spotlight}></div>
                <div className={styles.center}><img className={styles.position}
                                                    src="/images/bellossom.gif"/>
                </div>
            </div>)
}
