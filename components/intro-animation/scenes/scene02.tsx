import styles from './scene02.module.scss'

export default function Scene02() {
    return (
            <div className={`${styles.scene}`}>
                <div className={styles.borderTop}></div>
                <div className={styles.borderBottom}></div>
                <div className={styles.center}><img className={styles.position}
                                                    src="/images/donphan.gif"/>
                </div>
            </div>)
}
