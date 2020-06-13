import useAudio from "../../hooks/useAudio";
import {useEffect, useState} from "react";
import {GameScreen} from "../../store/Global/GlobalModels";
import {useGlobal} from "../../store/Global/GlobalContext";
import dynamic from "next/dynamic";
const CursorMenu = dynamic(
    () => import("./menu-cursor/cursor-menu"),
    {ssr: false}
)


export default function CursorCustom() {

    const globalState = useGlobal();

    const [cursor, setCursor] = useState(null);

    useEffect(() => {
        if (!globalState.state.turnedOn) {
            setCursor(null);;
        } else if (globalState.state.actualScreen === GameScreen.MainMenu) {
            setCursor(<CursorMenu />);
        } else {
            setCursor(null);;
        }
        return () => {
        }
    }, [globalState.state.actualScreen]);

    return <div>{cursor}</div>
}
