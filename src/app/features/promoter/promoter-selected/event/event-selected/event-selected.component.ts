import { Component, OnInit } from '@angular/core';
import { EventDto } from '@app/features/dto/event-dto';
import { ShellService } from '@app/shell/shell.service';

@Component({
  selector: 'app-event-selected',
  templateUrl: './event-selected.component.html',
  styleUrls: ['./event-selected.component.scss'],
})
export class EventSelectedComponent implements OnInit {
  focussedEventDto: EventDto = new EventDto('', 'eventName', 'venueName', '', '', '', '', 0, 0, false);

  constructor(private shellService: ShellService) {}

  ngOnInit(): void {}
}
