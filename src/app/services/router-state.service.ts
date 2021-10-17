import { Injectable } from '@angular/core';
import { defer, merge, Observable, of } from 'rxjs';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  convertToParamMap,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { filter, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouterStateService {
  routeParamsMap: Observable<ParamMap>;
  queryParamsMap: Observable<ParamMap>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.routeParamsMap = merge(
      defer(() => of(findAllRouteParams(this.router.routerState.snapshot.root))),
      router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => findAllRouteParams(this.router.routerState.snapshot.root))
      )
    ).pipe(
      map((params) => convertToParamMap(params)),
      shareReplay(1)
    );

    this.queryParamsMap = this.activatedRoute.queryParamMap;
  }
}

function findAllRouteParams(state: ActivatedRouteSnapshot, routeParams: Record<string, string> = {}): any {
  const updatedParams = {
    ...routeParams,
    ...state.params,
  };

  if (state.firstChild) {
    return findAllRouteParams(state.firstChild, updatedParams);
  } else {
    return updatedParams;
  }
}
