import style from "./main-menu.module.scss";
import {useEffect, useReducer} from "react";
import {useGlobal} from "../store/Global/GlobalContext";
import {setActualScreen} from "../store/Global/GlobalActions";
import {GameScreen} from "../store/Global/GlobalModels";
import {useCursorMenu} from "../components/custom-cursor/cursor-menu/CursorMenuContext";
import {defaultDistance, increaseDistance} from "../components/custom-cursor/cursor-menu/CursorMenuActions";
import Router from "next/router";


enum ActionType {
    SelectNone = 'SelectNone',
    SelectGbTower = 'SelectGbTower',
    SelectMyRoom = 'SelectMyRoom',
    SelectPokemonLab = 'SelectPokemonLab',
    SelectGymLeaderCastle = 'SelectGymLeaderCastle',
    SelectMiniGames = 'SelectMiniGames',
    SelectFreeBattle = 'SelectFreeBattle',
    SelectPokemonAcademy = 'SelectPokemonAcademy',
    SelectStadium = 'SelectStadium',
    ConfirmSelected = 'ConfirmSelected',
}

enum MainMenuOption {
    NONE = 'NONE',
    GB_TOWER = 'GB_TOWER',
    MY_ROOM = 'MY_ROOM',
    POKEMON_LAB = 'POKEMON_LAB',
    GYM_LEADER_CASTLE = 'GYM_LEADER_CASTLE',
    MINI_GAMES = 'MINI_GAMES',
    FREE_BATTLE = 'FREE_BATTLE',
    POKEMON_ACADEMY = 'POKEMON_ACADEMY',
    STADIUM = 'STADIUM',
}

interface IOptionMenu {
    actionType: ActionType,
    option: MainMenuOption,
    title: string,
    description: string,
    top: number,
    left: number,
    width: number,
    height: number,
    cursorDistance: number
}

const options: Map<MainMenuOption, IOptionMenu> = new Map(); // or var map = {};
options[MainMenuOption.STADIUM] = {
    actionType: ActionType.SelectStadium,
    option: MainMenuOption.STADIUM,
    title: "STADIUM",
    description: "The STADIUM where battles are held. Test the mettle of your Pokémon with four sets of rules",
    top: 129,
    left: 223,
    width: 178,
    height: 108,
    cursorDistance: 70
};
options[MainMenuOption.GB_TOWER] = {
    actionType: ActionType.SelectGbTower,
    option: MainMenuOption.GB_TOWER,
    title: "GB Tower",
    description: "Available soon...",
    top: 256,
    left: 324,
    width: 80,
    height: 100,
    cursorDistance: 45
};
options[MainMenuOption.MY_ROOM] = {
    actionType: ActionType.SelectMyRoom,
    option: MainMenuOption.MY_ROOM,
    title: "MY ROOM",
    description: "Available soon...",
    top: 275,
    left: 153,
    width: 55,
    height: 55,
    cursorDistance: 40
};
options[MainMenuOption.POKEMON_LAB] = {
    actionType: ActionType.SelectPokemonLab,
    option: MainMenuOption.POKEMON_LAB,
    title: "POKéMON LAB",
    description: "Available soon...",
    top: 155,
    left: 102,
    width: 98,
    height: 65,
    cursorDistance: 50
};
options[MainMenuOption.GYM_LEADER_CASTLE] = {
    actionType: ActionType.SelectGymLeaderCastle,
    option: MainMenuOption.GYM_LEADER_CASTLE,
    title: "GYM LEADER CASTLE",
    description: "Available soon...",
    top: 21,
    left: 158,
    width: 70,
    height: 72,
    cursorDistance: 50
};
options[MainMenuOption.MINI_GAMES] = {
    actionType: ActionType.SelectMiniGames,
    option: MainMenuOption.MINI_GAMES,
    title: "MINI-GAMES",
    description: "You can play Mini-Games here. New POKéMON hope you'll join them for fun!",
    top: 21,
    left: 290,
    width: 99,
    height: 81,
    cursorDistance: 60
};
options[MainMenuOption.FREE_BATTLE] = {
    actionType: ActionType.SelectFreeBattle,
    option: MainMenuOption.FREE_BATTLE,
    title: "FREE BATTLE",
    description: "Available soon...",
    top: 82,
    left: 465,
    width: 76,
    height: 66,
    cursorDistance: 50
};
options[MainMenuOption.POKEMON_ACADEMY] = {
    actionType: ActionType.SelectPokemonAcademy,
    option: MainMenuOption.POKEMON_ACADEMY,
    title: "POKéMON ACADEMY",
    description: "Available soon...",
    top: 157,
    left: 501,
    width: 76,
    height: 66,
    cursorDistance: 50
};

interface IMainMenuState {
    selected: MainMenuOption;
    title: string,
    description: string
}

const initialState: IMainMenuState = {selected: MainMenuOption.NONE, title: "", description: ""};
// const initialState = {selected: 0};


export default function MainMenu() {
    const globalState = useGlobal();
    const cursorMenuState = useCursorMenu();

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case ActionType.SelectNone:
                return {selected: MainMenuOption.NONE, title: "", description: ""};
            case ActionType.SelectGbTower:
                return {
                    selected: MainMenuOption.GB_TOWER,
                    title: options[MainMenuOption.GB_TOWER].title,
                    description: options[MainMenuOption.GB_TOWER].description
                };
            case ActionType.SelectStadium:
                return {
                    selected: MainMenuOption.STADIUM,
                    title: options[MainMenuOption.STADIUM].title,
                    description: options[MainMenuOption.STADIUM].description
                };
            case ActionType.SelectMyRoom:
                return {
                    selected: MainMenuOption.MY_ROOM,
                    title: options[MainMenuOption.MY_ROOM].title,
                    description: options[MainMenuOption.MY_ROOM].description
                };
            case ActionType.SelectPokemonLab:
                return {
                    selected: MainMenuOption.POKEMON_LAB,
                    title: options[MainMenuOption.POKEMON_LAB].title,
                    description: options[MainMenuOption.POKEMON_LAB].description
                };
            case ActionType.SelectGymLeaderCastle:
                return {
                    selected: MainMenuOption.GYM_LEADER_CASTLE,
                    title: options[MainMenuOption.GYM_LEADER_CASTLE].title,
                    description: options[MainMenuOption.GYM_LEADER_CASTLE].description
                };
            case ActionType.SelectMiniGames:
                return {
                    selected: MainMenuOption.MINI_GAMES,
                    title: options[MainMenuOption.MINI_GAMES].title,
                    description: options[MainMenuOption.MINI_GAMES].description
                };
            case ActionType.SelectFreeBattle:
                return {
                    selected: MainMenuOption.FREE_BATTLE,
                    title: options[MainMenuOption.FREE_BATTLE].title,
                    description: options[MainMenuOption.FREE_BATTLE].description
                };
            case ActionType.SelectPokemonAcademy:
                return {
                    selected: MainMenuOption.POKEMON_ACADEMY,
                    title: options[MainMenuOption.POKEMON_ACADEMY].title,
                    description: options[MainMenuOption.POKEMON_ACADEMY].description
                };
            default:
                throw new Error();
        }
    }

    useEffect(() => {

    }, [])

    // const cursor = useRef(null);
    const onMouseOver = (option: IOptionMenu) => {
        console.log('mouse over', option);
        cursorMenuState.dispatch(increaseDistance(option.cursorDistance));
        dispatch({type: option.actionType});
    }

    const onMouseOut = () => {
        cursorMenuState.dispatch(defaultDistance());
        dispatch({type: ActionType.SelectNone});
    }


    useEffect(() => {
        globalState.dispatch(setActualScreen(GameScreen.MainMenu));
    }, [])

    return (
        <>
            <div className={style.page}>
                {Object.keys(options).map(key => (
                    <div id={key} key={key} onMouseOver={() => onMouseOver(options[key])} onMouseOut={onMouseOut}
                         style={{position: 'absolute', top: `${options[key].top}px`, left: `${options[key].left}px`, width: `${options[key].width}px`, height: `${options[key].height}px`}}></div>
                ))}

                <div id="text-container" className={style.textContainer}>
                    <img src="/images/main-menu-text-container-icon.png" className={style.textContainerIcon}/>
                    <div id="text-container-title" className={style.textContainerTitle}>{state.title}</div>
                    <div id="text-container-description"
                         className={style.textContainerDescription}>{state.description}</div>
                </div>
            </div>
        </>)
}
