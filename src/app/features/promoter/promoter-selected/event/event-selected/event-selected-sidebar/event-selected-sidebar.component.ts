import { Component, OnDestroy, OnInit } from '@angular/core';
import { PromoterDashSideBarService } from '@app/features/promoter/promoter-dash-side-bar/promoter-dash-side-bar.service';
import { SideBarMenuItem } from '@app/features/dto/side-bar-menu-item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-selected-sidebar',
  templateUrl: './event-selected-sidebar.component.html',
  styleUrls: ['./event-selected-sidebar.component.scss'],
})
export class EventSelectedSidebarComponent implements OnInit, OnDestroy {
  focussedMenuItem: SideBarMenuItem = new SideBarMenuItem('', '', '');
  sideBarMenuItems: SideBarMenuItem[];

  private activatedRoute: ActivatedRoute;
  private router: Router;

  constructor(private sidebarService: PromoterDashSideBarService, activatedRoute: ActivatedRoute, router: Router) {
    this.router = router;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit(): void {
    // set the initial components menuBarItems
    this.sidebarService.setSideBarItems([
      {
        // url: '../event(detail:new)', // TODO: load promoter
        url: `[{ outlets: { detail: ['onboard-customer'] } }]`,
        // url: ['../' + this.focussedPromoterDto.uuid + '/my-event-overview'],
        // url: '/1/(detail:my-event-overview)',
        materialIcon: 'add',
        description: 'Onboard Customer',
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

    this.router.navigate([this.router.url + '/', { outlets: { detail: 'edit' } }]);
  }

  setFocussedItem(sideBarMenuItem: SideBarMenuItem) {
    this.focussedMenuItem = sideBarMenuItem;
  }

  ngOnDestroy(): void {}

  // public closeNamedRouterOutlet(): void {
  //
  //   this.router.navigate(
  //     [
  //       '../',
  //       {
  //         outlets: {
  //           detail: null
  //         }
  //       }
  //     ],
  //     {
  //       relativeTo: this.activatedRoute
  //     }
  //   );
  //
  // }
}
