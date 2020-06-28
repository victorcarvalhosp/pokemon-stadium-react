import styles from './text-blue-background.module.scss'

export default function TextBlueBackground({ text, fadeSide, style }: { text: string, fadeSide: "left"|"right", style?: any }) {
    return <h2 className={`${styles.title} ${fadeSide === "right" ? styles.right : styles.left}`} style={style ? style : {}}>{text}</h2>
}
