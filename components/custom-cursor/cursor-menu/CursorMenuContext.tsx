import React, {useContext, useReducer} from "react";
import {cursorMenuInitialState, cursorMenuReducer} from "./CursorMenuReducer";
import {ContextValue} from "../../../store/ContextValue";
import {CursorMenuState} from "./CursorMenuModels";
import {CursorMenuAction} from "./CursorMenuActions";


const CursorMenuContext = React.createContext<ContextValue<CursorMenuState, CursorMenuAction>>(null);

export const CursorMenuProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(cursorMenuReducer, cursorMenuInitialState);

    return (
        <CursorMenuContext.Provider value={{state, dispatch}}>
            {children}
        </CursorMenuContext.Provider>
    );
};

export const useCursorMenu = () => useContext(CursorMenuContext);
