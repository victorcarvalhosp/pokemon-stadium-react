import useAudio from "../../hooks/useAudio";
import {useEffect} from "react";
import {GameScreen} from "../../store/Global/GlobalModels";
import {useGlobal} from "../../store/Global/GlobalContext";


export default function GameAudio() {

    const globalState = useGlobal();
    const [, introScreenPlayAudio, introScreenStopAudio] = useAudio("/audio/intro.mp3");
    const [, titleScreenPlayAudio, titleScreenStopAudio] = useAudio("/audio/title-screen.mp3");

    useEffect(() => {
        if (!globalState.state.turnedOn) {
            titleScreenStopAudio();
            introScreenStopAudio();
        } else if (globalState.state.actualScreen === GameScreen.Intro) {
            introScreenPlayAudio();
        } else if (globalState.state.actualScreen === GameScreen.Title) {
            titleScreenPlayAudio();
        }
        return () => {
            // titleScreenStopAudio();
        }
    }, [globalState.state.turnedOn, globalState.state.actualScreen]);
    // const [, titleScreenPlayAudio, titleScreenStopAudio] = useAudio("/audio/title-screen.mp3");

    return <div> </div>
}
