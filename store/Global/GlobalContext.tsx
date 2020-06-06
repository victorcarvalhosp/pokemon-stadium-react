import React, {useContext, useReducer, useState} from "react";
import {ContextValue} from "../ContextValue";
import {GlobalState} from "./GlobalModels";
import {GlobalAction} from "./GlobalActions";
import {globalInitialState, globalReducer} from "./GlobalReducer";

const GlobalContext = React.createContext<ContextValue<GlobalState, GlobalAction>>(null);

export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, globalInitialState);

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => useContext(GlobalContext);
