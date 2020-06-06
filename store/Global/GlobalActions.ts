import {Action} from "../Action";
import {GlobalState} from "./GlobalModels";

export enum GlobalActionType {
    TurnOn = 'TurnOn',
    TurnOff = 'TurnOff',
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
        payload: {turnedOn: false},
    }
};
