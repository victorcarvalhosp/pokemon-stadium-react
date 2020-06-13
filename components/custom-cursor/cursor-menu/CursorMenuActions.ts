import {Action} from "../../../store/Action";
import {CursorMenuState} from "./CursorMenuModels";

export enum CursorMenuActionType {
    IncreaseDistance = 'IncreaseDistance',
    DefaultDistance = 'DefaultDistance',
}

export const CURSOR_MENU_DEFAULT_DISTANCE = 30;

export type CursorMenuAction = Action<CursorMenuActionType, CursorMenuState>;

export const increaseDistance = (distance: number): CursorMenuAction => {
    return {
        type: CursorMenuActionType.IncreaseDistance,
        payload: {distance: distance},
    }
};

export const defaultDistance = (): CursorMenuAction => {
    return {
        type: CursorMenuActionType.DefaultDistance,
        payload: {distance: CURSOR_MENU_DEFAULT_DISTANCE},
    }
};
