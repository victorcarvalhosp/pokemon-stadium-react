import style from "./title.module.scss";
import useAudio from "../hooks/useAudio";
import {useEffect} from "react";
import {useGlobal} from "../store/Global/GlobalContext";

export default function Title() {
    const [, playAudio, stopAudio] = useAudio("/audio/title-screen.mp3");
    const globalState = useGlobal();

    useEffect(() => {
        playAudio();
        return () => {
            stopAudio();
        }
    }, []);

    useEffect(() => {
        if (!globalState.state.turnedOn) {
            stopAudio();
        }
        return () => {
            stopAudio();
        }
    }, [globalState.state.turnedOn]);

    return (
            <div className={style.page}><img className={style.title} src="/images/intro-title.png"/>
                <img className={style.pressStart} src="/images/press-start.png"/>
            </div>
        )
}
