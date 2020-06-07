import {Action} from "../Action";
import {GlobalState} from "./GlobalModels";

export enum GlobalActionType {
    TurnOn = 'TurnOn',
    TurnOff = 'TurnOff',
    ShowContent = 'ShowContent',
}

export type GlobalAction = Action<GlobalActionType, GlobalState>;

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
