import {Reducer} from "react";
import {CursorMenuState} from "./CursorMenuModels";
import {CursorMenuActionType, CursorMenuAction, CURSOR_MENU_DEFAULT_DISTANCE} from "./CursorMenuActions";

export const cursorMenuInitialState: CursorMenuState = {
    distance: CURSOR_MENU_DEFAULT_DISTANCE,
};

export const cursorMenuReducer: Reducer<CursorMenuState, CursorMenuAction> = (state = cursorMenuInitialState, action) => {
    switch (action.type) {
        case CursorMenuActionType.DefaultDistance:
        case CursorMenuActionType.IncreaseDistance:
            return {...state, ...action.payload};
        default:
            return {...cursorMenuInitialState, ...action.payload};
    }
};
