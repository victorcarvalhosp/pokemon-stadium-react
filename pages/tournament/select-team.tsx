import style from "./select-team.module.scss";
import {useEffect} from "react";
import {useGlobal} from "../../store/Global/GlobalContext";
import {GameScreen} from "../../store/Global/GlobalModels";
import {setActualScreen} from "../../store/Global/GlobalActions";
import {tournaments} from "../../data/tournaments";


export default function SelectTeam() {
    const globalState = useGlobal();

    useEffect(() => {
        globalState.dispatch(setActualScreen(GameScreen.SelectTeamTournament));
    }, [])

    return (
        <>
            <div className={style.page}>
                {tournaments[globalState.state.activeTournament].title}
            </div>
        </>)
}
