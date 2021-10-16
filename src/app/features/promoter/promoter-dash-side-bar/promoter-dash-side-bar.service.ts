import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SideBarMenuItem } from '@app/features/dto/side-bar-menu-item';

@Injectable({
  providedIn: 'root',
})
export class PromoterDashSideBarService {
  private sideBarMenuItems: Observable<SideBarMenuItem[]>;

  constructor() {}

  setSideBarItems(sideBarMenuItems: SideBarMenuItem[]) {
    this.sideBarMenuItems = of(sideBarMenuItems);
  }

  getSideBarItems(): Observable<SideBarMenuItem[]> {
    return this.sideBarMenuItems;
  }

  // getSideBarItems(uuid: string): SideBarMenuItem[] {
  //   return [
  //     { url: uuid + '/my-event-overview', materialIcon: 'chevron_right', description: 'My event overview' }
  //     , { url: '../' + uuid + '/create-event', materialIcon: 'chevron_right', description: 'Create Event' }
  //   ];
  // }
}
