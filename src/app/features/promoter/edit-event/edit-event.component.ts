import { Component, OnInit } from '@angular/core';
import { EventDto } from '@app/features/dto/event-dto';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {
  focussedEventDto: EventDto = new EventDto('', 'eventName', 'venueName', '', '', '', '', 0, 0, false);

  constructor() {}

  ngOnInit(): void {}
}
