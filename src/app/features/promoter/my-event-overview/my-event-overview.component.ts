import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDto } from '@app/features/dto/event-dto';
import { ApiHttpService } from '@app/services/api-http.service';
import { Constants } from '@app/config/constants';
import { PromoterConstants } from '@app/features/promoter/promoter-constants';

@Component({
  selector: 'app-my-event-overview',
  templateUrl: './my-event-overview.component.html',
  styleUrls: ['./my-event-overview.component.scss'],
})
export class MyEventOverviewComponent implements OnInit {
  Events: EventDto[];

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
      this.Events = res;
      console.log(this.Events);
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
