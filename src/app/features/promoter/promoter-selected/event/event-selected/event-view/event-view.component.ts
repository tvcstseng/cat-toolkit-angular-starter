import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventDto } from '@app/features/dto/event-dto';
import { ShellService } from '@app/shell/shell.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss'],
})
export class EventViewComponent implements OnInit, OnDestroy {
  focussedEventDto: EventDto = new EventDto('', 'eventName', 'venueName', '', '', '', '', 0, 0, false);

  constructor(private shellService: ShellService) {}

  ngOnInit(): void {
    this.shellService.setDetailRouterEnabled(false);
  }

  ngOnDestroy(): void {
    this.shellService.setDetailRouterEnabled(true);
  }
}
