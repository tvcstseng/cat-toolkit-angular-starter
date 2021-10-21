import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShellService } from '@app/shell/shell.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, AfterViewInit {
  route: string;
  detailRouterEnabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  searchQuery: string;

  constructor(
    private shellService: ShellService,
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    if (window.location.href !== '') {
      console.log('current route: ' + window.location.href);
    } else {
      console.log('current route: ' + window.location.href);
    }
  }

  async ngOnInit() {
    this.detailRouterEnabled$.next(this.shellService.getDetailRouterEnabled().getValue());
  }

  detailRouterEnabled(): BehaviorSubject<boolean> {
    return this.shellService.getDetailRouterEnabled();
  }

  ngAfterViewInit(): void {
    this.detailRouterEnabled$.next(this.shellService.getDetailRouterEnabled().getValue());
    this.cd.detectChanges();
    console.log('ShellComponent: Changes detected: ' + this.detailRouterEnabled$.getValue());
  }

  // goback
  // I attempt to close the chat by nullifying the secondary outlet using the PARENT'S
  // ACTIVATED ROUTE.
  public goBack(): void {
    this.router.navigate([{ outlets: { detail: ['list'] } }], { relativeTo: this.activatedRoute });
    // this.router.navigate(
    //   [
    //     // NOTE: No relative-path navigation is required because we are accessing
    //     // the parent's "activatedRoute" instance. As such, this will be executed
    //     // as if we were doing this in the parent view component.
    //     {
    //       outlets: {
    //         detail: ['list']
    //       }
    //     }
    //   ],
    //   {
    //     relativeTo: this.activatedRoute.parent // <--- PARENT activated route.
    //   }
    // );
  }
}
