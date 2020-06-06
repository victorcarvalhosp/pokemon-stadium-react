import styles from './intro-animation.module.scss'

export default function IntroAnimation() {
    return <>
        <div className={styles.center}>
            <img className={styles.logo} style={{width: '144px'}} src="/images/nintendo-64-logo.png"/>
        </div>
    </>
}
