import { Action, ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from "../shared/utils";
import { localStorageSync } from "ngrx-store-localstorage";
import { environment } from "client/environments/environment";

export interface State {
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    router: fromRouter.routerReducer
}


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State | undefined, action: any): State {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}


export const metaReducers: MetaReducer<State, Action>[] = [logger]