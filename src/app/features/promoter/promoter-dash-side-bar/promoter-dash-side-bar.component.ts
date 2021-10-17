import { Component, OnInit } from '@angular/core';
import { SideBarMenuItem } from '@app/features/dto/side-bar-menu-item';
import { PromoterDashSideBarService } from '@app/features/promoter/promoter-dash-side-bar/promoter-dash-side-bar.service';

@Component({
  selector: 'app-promoter-dash-side-bar',
  templateUrl: './promoter-dash-side-bar.component.html',
  styleUrls: ['./promoter-dash-side-bar.component.scss'],
})
export class PromoterDashSideBarComponent implements OnInit {
  focussedMenuItem: SideBarMenuItem = new SideBarMenuItem('', '', '');
  sideBarMenuItems: SideBarMenuItem[];

  constructor(private sidebarService: PromoterDashSideBarService) {}

  ngOnInit(): void {
    // set the initial components menuBarItems
    this.sidebarService.setSideBarItems([
      {
        url: ':1/event/(detail:list)', // TODO: load promoter

        // url: ['../' + this.focussedPromoterDto.uuid + '/my-event-overview'],
        // url: '/1/(detail:my-event-overview)',
        materialIcon: 'chevron_right',
        description: 'manage my events',
      },
      // , {
      //   url: '../' + this.focussedPromoterDto.uuid + '/create-event',
      //   materialIcon: 'chevron_right',
      //   description: 'Create Event'
      // }
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
