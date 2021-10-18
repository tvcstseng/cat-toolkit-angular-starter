import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShellService } from '@app/shell/shell.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, AfterViewInit {
  route: string;
  detailRouterEnabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  searchQuery: string;

  constructor(private shellService: ShellService, private cd: ChangeDetectorRef) {
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
}
