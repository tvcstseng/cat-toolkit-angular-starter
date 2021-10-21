import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDto } from '@app/features/dto/event-dto';
import { ApiHttpService } from '@app/services/api-http.service';
import { Constants } from '@app/config/constants';
import { PromoterConstants } from '@app/features/promoter/promoter-constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events: EventDto[];

  focussedEventDto: EventDto = new EventDto('', 'eventName', 'venueName', '', '', '', '', 0, 0, false);

  constructor(
    private constants: Constants,
    private apiHttpService: ApiHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refreshEvents();
  }

  public setFocussedEvent(eventDto: EventDto) {
    this.focussedEventDto = eventDto;
    PromoterConstants.EVENT_ID_PARAM_VALUE = eventDto.uuid;
    this.closeDetailViaParent();
  }

  // I attempt to close the chat by nullifying the secondary outlet using the PARENT'S
  // ACTIVATED ROUTE.
  public closeDetailViaParent(): void {
    this.router.navigate(
      [
        // NOTE: No relative-path navigation is required because we are accessing
        // the parent's "activatedRoute" instance. As such, this will be executed
        // as if we were doing this in the parent view component.
        {
          outlets: {
            primary: 'event-selected/' + this.focussedEventDto.uuid,
            detail: null,
          },
        },
      ],
      {
        relativeTo: this.activatedRoute.parent, // <--- PARENT activated route.
      }
    );
  }

  /*
   * Api calls
   */

  // Event search
  private refreshEvents() {
    // update the events
    this.getEvents().subscribe((res) => {
      this.events = res;
      console.log(this.events);
    });
  }

  private getEvents(): Observable<EventDto[]> {
    return this.apiHttpService.get(this.constants.api_url_event);
  }
}
