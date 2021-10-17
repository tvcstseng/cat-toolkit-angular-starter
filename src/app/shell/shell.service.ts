import { Route, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import { RouterStateService } from '@app/services/router-state.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { homeSearchQueryParamKey } from '@app/constants';
import { Injectable } from '@angular/core';

/**
 * Provides helper methods to create routes.
 */
@Injectable()
export class ShellService {
  searchQuery: Observable<string | null>;
  detailRouterEnabled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  // pageTitle: string;
  // constructor(
  //   private route: ActivatedRoute
  // ) {}
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
    };
  }

  constructor(routerState: RouterStateService) {
    this.searchQuery = routerState.queryParamsMap.pipe(map((queryParams) => queryParams.get(homeSearchQueryParamKey)));
    console.log('Current searchQuery: ' + this.searchQuery);
  }

  setDetailRouterEnabled(enabled: boolean) {
    this.detailRouterEnabled.next(enabled);

    // this.detailRouterEnabled.pipe(map(this.detailRouterEnabled.)) = of(enabled);

    // this.detailRouterEnabled = of(enabled);

    // const addItem =
    //   (item: any) => this.detailRouterEnabled.pipe(
    //     first(),
    //     tap(arr => this.detailRouterEnabled.next(enabled)),
    //     first(),
    //   )

    // console.log(`ShellService setDetailRouterEnabled:${this.detailRouterEnabled as Observable<boolean>}`);
  }

  getDetailRouterEnabled(): BehaviorSubject<boolean> {
    return this.detailRouterEnabled;
  }
}
