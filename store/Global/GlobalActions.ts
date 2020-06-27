import {Action} from "../Action";
import {GameScreen, GlobalState} from "./GlobalModels";

export enum GlobalActionType {
    TurnOn = 'TurnOn',
    TurnOff = 'TurnOff',
    ShowContent = 'ShowContent',
    SetScreen = 'SetScreen',
    SetActiveTournament= 'SetActiveTournament'
}

export type GlobalAction = Action<GlobalActionType, GlobalState>;

export const setActiveTournament = (tournament: number): GlobalAction => {
    return {
        type: GlobalActionType.SetActiveTournament,
        payload: {activeTournament: tournament},
    }
};

export const turnOn = (): GlobalAction => {
    return {
        type: GlobalActionType.TurnOn,
        payload: {turnedOn: true},
    }
};

export const turnOff = (): GlobalAction => {
    return {
        type: GlobalActionType.TurnOff,
        payload: {turnedOn: false, showContent: false},
    }
};

export const toggleShowContent = (showContent: boolean): GlobalAction => {
    console.log('toggle Show Content', showContent);
    return {
        type: GlobalActionType.TurnOff,
        payload: {showContent: showContent},
    }
};

export const setActualScreen = (screen: GameScreen): GlobalAction => {
    return {
        type: GlobalActionType.SetScreen,
        payload: {actualScreen: screen},
    }
};
