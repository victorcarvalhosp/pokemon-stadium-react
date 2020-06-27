import useAudio from "../../hooks/useAudio";
import {useEffect} from "react";
import {GameScreen} from "../../store/Global/GlobalModels";
import {useGlobal} from "../../store/Global/GlobalContext";


export default function GameAudio() {

    const globalState = useGlobal();
    const [, introPlayAudio, introStopAudio] = useAudio("/audio/intro.mp3");
    const [, titlePlayAudio, titleStopAudio] = useAudio("/audio/title-screen.mp3");
    const [, mainMenuPlayAudio, mainMenuStopAudio] = useAudio("/audio/main-menu.mp3");
    const [, stadiumMenuPlayAudio, stadiumMenuStopAudio] = useAudio("/audio/stadium.mp3");

    function stopAllSounds() {
        titleStopAudio();
        introStopAudio();
        mainMenuStopAudio();
        stadiumMenuStopAudio();
    }

    useEffect(() => {
        if (!globalState.state.turnedOn) {
            stopAllSounds();
        } else if (globalState.state.actualScreen === GameScreen.Intro) {
            stopAllSounds();
            introPlayAudio();
        } else if (globalState.state.actualScreen === GameScreen.Title) {
            stopAllSounds();
            titlePlayAudio();
        } else if (globalState.state.actualScreen === GameScreen.MainMenu) {
            stopAllSounds();
            mainMenuPlayAudio();
        } else if (globalState.state.actualScreen === GameScreen.StadiumMenu) {
            stopAllSounds();
            stadiumMenuPlayAudio();
        }
        return () => {
            // titleScreenStopAudio();
        }
    }, [globalState.state.turnedOn, globalState.state.actualScreen]);

    return <div> </div>
}
