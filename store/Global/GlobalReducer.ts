import {Reducer} from "react";
import {GlobalState} from "./GlobalModels";
import {GlobalAction, GlobalActionType} from "./GlobalActions";

export const globalInitialState: GlobalState = {
    turnedOn: false,
    showContent: false
};

export const globalReducer: Reducer<GlobalState, GlobalAction> = (state = globalInitialState, action) => {
    switch (action.type) {
        case GlobalActionType.TurnOn:
        case GlobalActionType.TurnOff:
        case GlobalActionType.ShowContent:
            return {...state, ...action.payload};
        default:
            return {...globalInitialState, ...action.payload};
    }
};
