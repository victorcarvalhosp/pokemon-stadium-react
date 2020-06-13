import style from "./main-menu.module.scss";
import useAudio from "../hooks/useAudio";
import {useEffect, useRef} from "react";
import {useGlobal} from "../store/Global/GlobalContext";
import {setActualScreen} from "../store/Global/GlobalActions";
import {GameScreen} from "../store/Global/GlobalModels";
import Router from "next/router";

export default function MainMenu() {
    // const [, playAudio, stopAudio] = useAudio("/audio/title-screen.mp3");
    const globalState = useGlobal();

    useEffect(() => {

    }, [])

    // const cursor = useRef(null);



    useEffect(() => {
        globalState.dispatch(setActualScreen(GameScreen.MainMenu));
    }, [])

    return (
        <>
            <div className={style.page}>
                <div id="stadium" className={style.castle}></div>

            </div>
        </>)
}
