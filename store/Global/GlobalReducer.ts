import {Reducer} from "react";
import {GameScreen, GlobalState} from "./GlobalModels";
import {GlobalAction, GlobalActionType} from "./GlobalActions";

export const globalInitialState: GlobalState = {
    turnedOn: false,
    showContent: false,
    actualScreen: GameScreen.None,
    activeTournament: 0
};

export const globalReducer: Reducer<GlobalState, GlobalAction> = (state = globalInitialState, action) => {
    switch (action.type) {
        case GlobalActionType.TurnOn:
        case GlobalActionType.TurnOff:
        case GlobalActionType.ShowContent:
        case GlobalActionType.SetScreen:
        case GlobalActionType.SetActiveTournament:
            return {...state, ...action.payload};
        default:
            return {...globalInitialState, ...action.payload};
    }
};
