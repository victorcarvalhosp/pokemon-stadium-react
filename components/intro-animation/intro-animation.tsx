import styles from './intro-animation.module.scss'
import {useEffect} from "react";
import useAudio from "../../hooks/useAudio";
import {useGlobal} from "../../store/Global/GlobalContext";



export default function IntroAnimation() {
    const [, playAudio, stopAudio] = useAudio("/audio/intro.mp3");
    const globalState = useGlobal();

    useEffect(() =>{
        playAudio();
        return () => {
            stopAudio();
        }
    }, [])

    useEffect(() => {
        if(!globalState.state.turnedOn) {
            stopAudio();
        }
    }, [globalState.state.turnedOn])

    return <>
        <div className={styles.center}>
            <img className={styles.logo} style={{width: '144px'}} src="/images/nintendo-64-logo.png"/>
        </div>
    </>
}
