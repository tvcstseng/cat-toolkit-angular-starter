import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShellService } from '@app/shell/shell.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit, OnDestroy {
  constructor(private shellService: ShellService) {}

  ngOnInit() {
    this.shellService.setDetailRouterEnabled(true);
    console.log('EventComponent: true');
  }

  ngOnDestroy() {}
}
