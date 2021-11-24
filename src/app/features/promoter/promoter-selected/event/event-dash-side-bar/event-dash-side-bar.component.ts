import { Component, OnInit } from '@angular/core';
import { SideBarMenuItem } from '@app/features/dto/side-bar-menu-item';
import { PromoterDashSideBarService } from '@app/features/promoter/promoter-dash-side-bar/promoter-dash-side-bar.service';

@Component({
  selector: 'app-event-dash-side-bar',
  templateUrl: './event-dash-side-bar.component.html',
  styleUrls: ['./event-dash-side-bar.component.scss'],
})
export class EventDashSideBarComponent implements OnInit {
  focussedMenuItem: SideBarMenuItem = new SideBarMenuItem('', '', '');
  sideBarMenuItems: SideBarMenuItem[];

  constructor(private sidebarService: PromoterDashSideBarService) {}

  ngOnInit(): void {
    // set the initial components menuBarItems
    this.sidebarService.setSideBarItems([
      {
        url: 'new',
        materialIcon: 'add',
        description: 'Create event',
      },
    ]);
    // subscribe to the observable to get changes when other components have focus
    this.sidebarService.getSideBarItems().subscribe((result: SideBarMenuItem[]) => {
      this.sideBarMenuItems = result;
    });
  }

  setFocussedItem(sideBarMenuItem: SideBarMenuItem) {
    this.focussedMenuItem = sideBarMenuItem;
  }
}
