import {Dispatch} from "react";

export interface ContextValue<S, A> {
    state: S;
    dispatch: Dispatch<A>;
}
