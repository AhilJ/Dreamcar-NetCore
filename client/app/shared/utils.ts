import { Injectable } from "@angular/core";
import { Params, RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";
import { select, Store } from "@ngrx/store";
import { take } from "rxjs";

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}
@Injectable({
    providedIn: 'root'
})
export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
    constructor(private _store: Store<any>) {}

    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { params } = routerState.root;

        const { url, root: { queryParams } } = routerState;

        return {url, params, queryParams}
    }
}

export const trackByFn = (index: number) => index;

export const getState = <T>(store: Store<any>, selectorFn: any, props: any): T|null => {
    let _val: T|null = null;
    store.pipe(
        take(1),
        select(selectorFn, props)
    ).subscribe((value: T) => _val = value);
    return _val;
}