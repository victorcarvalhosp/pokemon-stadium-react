import style from "./title.module.scss";
import useAudio from "../hooks/useAudio";
import {useEffect} from "react";
import {useGlobal} from "../store/Global/GlobalContext";
import {setActualScreen} from "../store/Global/GlobalActions";
import {GameScreen} from "../store/Global/GlobalModels";

export default function Title() {
    // const [, playAudio, stopAudio] = useAudio("/audio/title-screen.mp3");
    const globalState = useGlobal();

    useEffect(() => {
        globalState.dispatch(setActualScreen(GameScreen.Title));
    }, [])

    return (
            <div className={style.page}><img className={style.title} src="/images/intro-title.png"/>
                <img className={style.pressStart} src="/images/press-start.png"/>
            </div>
        )
}
