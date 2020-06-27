import style from "./menu.module.scss";
import {useGlobal} from "../../store/Global/GlobalContext";
import {useEffect, useReducer} from "react";
import {setActualScreen} from "../../store/Global/GlobalActions";
import {GameScreen} from "../../store/Global/GlobalModels";
import MenuTextContainer from "../../components/menu-text-container/menu-text-container";
import {defaultDistance, increaseDistance} from "../../components/custom-cursor/cursor-menu/CursorMenuActions";
import Router from "next/router";

enum ActionType {
    SelectNone = 'SelectNone',
    SelectChallengeCup = 'SelectChallengeCup',
    SelectLittleCup = 'SelectLittleCup',
    SelectPokeCup = 'SelectPokeCup',
    SelectPrimeCup = 'SelectPrimeCup',
    ConfirmSelected = 'ConfirmSelected',
}

enum MenuOption {
    NONE = 'NONE',
    CHALLENGE_CUP = 'CHALLENGE_CUP',
    LITTLE_CUP = 'LITTLE_CUP',
    POKE_CUP = 'POKE_CUP',
    PRIME_CUP = 'PRIME_CUP',
}

interface IOptionMenu {
    actionType: ActionType,
    option: MenuOption,
    title: string,
    subTitle?: string,
    description: string,
    top: number,
    left: number,
    goTo?: string;
}

const options: Map<MenuOption, IOptionMenu> = new Map(); // or var map = {};
options[MenuOption.CHALLENGE_CUP] = {
    actionType: ActionType.SelectChallengeCup,
    option: MenuOption.CHALLENGE_CUP,
    title: "CHALLENGE CUP",
    description: "Battle in this CUP tournament using a preselected team. Can you handle lots od different kinds of POKéMON?",
    top: 182,
    left: 10,
    goTo: '/stadium/menu'
};
options[MenuOption.LITTLE_CUP] = {
    actionType: ActionType.SelectLittleCup,
    option: MenuOption.LITTLE_CUP,
    title: "LITTLE CUP",
    subTitle: "L5 only",
    description: "A tournament only to L5 POKéMON. Your true abilities may become apparent.",
    top: 50,
    left: 380,
    goTo: '/stadium/menu'
};
options[MenuOption.POKE_CUP] = {
    actionType: ActionType.SelectPokeCup,
    option: MenuOption.POKE_CUP,
    title: "POKé CUP",
    subTitle: "L50 ~ 55",
    description: "The official POKéMON League Tournament. Hone your skills to become the champ!",
    top: 182,
    left: 380,
    goTo: '/stadium/menu'
};
options[MenuOption.PRIME_CUP] = {
    actionType: ActionType.SelectPrimeCup,
    option: MenuOption.PRIME_CUP,
    title: "PRIME CUP",
    subTitle: "L1 ~ 100",
    description: "The ultimate tournament without level restrictions. Let it all hang out!",
    top: 280,
    left: 380,
    goTo: '/stadium/menu'
};

interface IMenuState {
    selected: MenuOption;
    title: string,
    description: string
}

const initialState: IMenuState = {selected: MenuOption.NONE, title: "", description: ""};


export default function Menu() {
    const globalState = useGlobal();

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case ActionType.SelectNone:
                return {selected: MenuOption.NONE, title: "", description: ""};
            case ActionType.SelectChallengeCup:
                return {
                    selected: MenuOption.CHALLENGE_CUP,
                    title: options[MenuOption.CHALLENGE_CUP].title,
                    description: options[MenuOption.CHALLENGE_CUP].description
                };
            case ActionType.SelectLittleCup:
                return {
                    selected: MenuOption.LITTLE_CUP,
                    title: options[MenuOption.LITTLE_CUP].title,
                    description: options[MenuOption.LITTLE_CUP].description
                };
            case ActionType.SelectPokeCup:
                return {
                    selected: MenuOption.POKE_CUP,
                    title: options[MenuOption.POKE_CUP].title,
                    description: options[MenuOption.POKE_CUP].description
                };
            case ActionType.SelectPrimeCup:
                return {
                    selected: MenuOption.PRIME_CUP,
                    title: options[MenuOption.PRIME_CUP].title,
                    description: options[MenuOption.PRIME_CUP].description
                };
            default:
                throw new Error();
        }
    }

    // const cursor = useRef(null);
    const onMouseOver = (option: IOptionMenu) => {
        console.log('mouse over', option);
        dispatch({type: option.actionType});
    }

    const onMouseOut = () => {
        dispatch({type: ActionType.SelectNone});
    }

    useEffect(() => {
        globalState.dispatch(setActualScreen(GameScreen.StadiumMenu));
    }, [])

    return (
        <>
            <div className={style.page}>
                <h1>
                    STADIUM
                </h1>
                {Object.keys(options).map(key => (
                    <div className={style.menuOption} id={key} key={key} onMouseOver={() => onMouseOver(options[key])} onMouseOut={onMouseOut} onClick={() => Router.push(options[key].goTo)}
                         style={{position: 'absolute', top: `${options[key].top}px`, left: `${options[key].left}px`, width: `250px`}}>
                        <h2>{options[key].title}</h2>
                        {options[key].subTitle && (
                            <p>{options[key].subTitle}</p>
                        )}
                    </div>
                ))}
                <MenuTextContainer title={state.title} description={state.description} iconPath="" />
            </div>
        </>)
}
