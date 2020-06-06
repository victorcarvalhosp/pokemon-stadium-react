import {Reducer} from "react";
import {GlobalState} from "./GlobalModels";
import {GlobalAction, GlobalActionType} from "./GlobalActions";

export const globalInitialState: GlobalState = {
    turnedOn: false
};

export const globalReducer: Reducer<GlobalState, GlobalAction> = (state = globalInitialState, action) => {
    switch (action.type) {
        case GlobalActionType.TurnOn:
            console.log('TURN ON REDUCER');
            return {...globalInitialState, ...action.payload};
        case GlobalActionType.TurnOff:
            return {...globalInitialState, ...action.payload};
        default:
            return {...state, ...action.payload};
    }
};
