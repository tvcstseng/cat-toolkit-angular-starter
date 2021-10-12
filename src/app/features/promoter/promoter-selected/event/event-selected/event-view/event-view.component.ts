import { Component, OnInit } from '@angular/core';
import { EventDto } from '@app/features/dto/event-dto';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss'],
})
export class EventViewComponent implements OnInit {
  focussedEventDto: EventDto = new EventDto('', 'eventName', 'venueName', '', '', '', '', 0, 0, false);

  constructor() {}

  ngOnInit(): void {}
}
