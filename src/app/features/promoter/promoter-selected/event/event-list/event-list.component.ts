import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDto } from '@app/features/dto/event-dto';
import { ApiHttpService } from '@app/services/api-http.service';
import { Constants } from '@app/config/constants';
import { PromoterConstants } from '@app/features/promoter/promoter-constants';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events: EventDto[];

  focussedEventDto: EventDto = new EventDto('', 'eventName', 'venueName', '', '', '', '', 0, 0, false);

  constructor(private constants: Constants, private apiHttpService: ApiHttpService) {}

  ngOnInit(): void {
    this.refreshEvents();
  }

  public setFocussedEvent(eventDto: EventDto) {
    this.focussedEventDto = eventDto;
    PromoterConstants.EVENT_ID_PARAM_VALUE = eventDto.uuid;
  }

  private refreshEvents() {
    // update the events
    this.getEvents().subscribe((res) => {
      this.events = res;
      console.log(this.events);
    });
  }

  /*
   * Api calls
   */
  // Event search
  private getEvents(): Observable<EventDto[]> {
    return this.apiHttpService.get(this.constants.api_url_event);
  }
}
