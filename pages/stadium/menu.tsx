import style from "./menu.module.scss";
import {useGlobal} from "../../store/Global/GlobalContext";
import {useEffect, useReducer} from "react";
import {setActiveTournament, setActualScreen} from "../../store/Global/GlobalActions";
import {GameScreen} from "../../store/Global/GlobalModels";
import MenuTextContainer from "../../components/menu-text-container/menu-text-container";
import Router from "next/router";
import {tournaments} from "../../data/tournaments";
import {Action} from "../../store/Action";
import TextBlueBackground from "../../components/text-blue-background/text-blue-background";

enum MenuActionType {
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
    actionType: MenuActionType,
    option: MenuOption,
    tournamentIndex: number,
    top: number,
    left: number,
    goTo?: string;
}

//Refactor title and description later to use just the tournamentIndex
const options: Map<MenuOption, IOptionMenu> = new Map(); // or var map = {};
options[MenuOption.CHALLENGE_CUP] = {
    actionType: MenuActionType.SelectChallengeCup,
    option: MenuOption.CHALLENGE_CUP,
    tournamentIndex: 2,
    top: 182,
    left: 10,
    goTo: '/stadium/menu'
};
options[MenuOption.LITTLE_CUP] = {
    actionType: MenuActionType.SelectLittleCup,
    option: MenuOption.LITTLE_CUP,
    tournamentIndex: 1,
    top: 50,
    left: 380,
    goTo: '/stadium/menu'
};
options[MenuOption.POKE_CUP] = {
    actionType: MenuActionType.SelectPokeCup,
    option: MenuOption.POKE_CUP,
    tournamentIndex: 3,
    top: 182,
    left: 380,
    goTo: '/stadium/menu'
};
options[MenuOption.PRIME_CUP] = {
    actionType: MenuActionType.SelectPrimeCup,
    option: MenuOption.PRIME_CUP,
    tournamentIndex: 4,
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

type MenuAction = Action<MenuActionType, IMenuState>;

export default function Menu() {
    const globalState = useGlobal();

    const [state, dispatch] = useReducer(reducer, initialState);

    const goToSelectPokemonTournamentScreen = (menuOption: MenuOption) => {
        globalState.dispatch(setActiveTournament(options[menuOption].tournamentIndex))
        Router.push('/tournament/select-team');
    }

    function reducer(state: IMenuState, action: MenuAction) {
        switch (action.type) {
            case MenuActionType.SelectNone:
                return {selected: MenuOption.NONE, title: "", description: ""};
            case MenuActionType.SelectChallengeCup:
            case MenuActionType.SelectLittleCup:
            case MenuActionType.SelectPokeCup:
            case MenuActionType.SelectPrimeCup:
                const tournamentIndex = options[action.payload.selected].tournamentIndex;
                return {
                    selected: action.payload.selected,
                    title: tournaments[tournamentIndex].title,
                    description: tournaments[tournamentIndex].description
                };
            default:
                throw new Error();
        }
    }

    // const cursor = useRef(null);
    const onMouseOver = (option: IOptionMenu) => {
        console.log('mouse over', option);
        dispatch({
            type: option.actionType,
            payload: {selected: option.option},
        });
    }

    const onMouseOut = () => {
        dispatch({type: MenuActionType.SelectNone});
    }

    useEffect(() => {
        globalState.dispatch(setActualScreen(GameScreen.StadiumMenu));
    }, [])

    return (
        <>
            <div className={style.page}>
                <TextBlueBackground text="STADIUM" fadeSide="right" style={{
                    position: 'fixed',
                    top: '14px',
                    left: '0px'
                }}/>
                {Object.keys(options).map(key => (
                    <div className={style.menuOption} id={key} key={key} onMouseOver={() => onMouseOver(options[key])}
                         onMouseOut={onMouseOut}
                         onClick={() => goToSelectPokemonTournamentScreen(options[key].option)}
                         style={{
                             position: 'absolute',
                             top: `${options[key].top}px`,
                             left: `${options[key].left}px`,
                             width: `250px`
                         }}>
                        <h2>{tournaments[options[key].tournamentIndex].title}</h2>
                        {tournaments[options[key].tournamentIndex].subTitle && (
                            <p>{tournaments[options[key].tournamentIndex].subTitle}</p>
                        )}
                    </div>
                ))}
                {state.title && (
                    <MenuTextContainer title={state.title} description={state.description} iconPath=""/>
                )}
            </div>
        </>)
}
