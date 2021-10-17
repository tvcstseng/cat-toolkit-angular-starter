import { Component, OnInit } from '@angular/core';
import { ShellService } from '@app/shell/shell.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  route: string;
  detailRouterEnabled$!: BehaviorSubject<boolean>;
  searchQuery: string;

  constructor(private shellService: ShellService) {
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
}
