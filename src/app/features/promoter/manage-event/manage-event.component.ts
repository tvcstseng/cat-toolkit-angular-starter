import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Constants } from '@app/config/constants';
import { ApiHttpService } from '@app/services/api-http.service';
import { CustomerDto } from '@app/features/dto/customer-dto';
import { EventDto } from '@app/features/dto/event-dto';
import { Observable, Subscription } from 'rxjs';
import { PromoterConstants } from '@app/features/promoter/promoter-constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-event',
  templateUrl: './manage-event.component.html',
  styleUrls: ['./manage-event.component.scss'],
})
export class ManageEventComponent implements OnInit {
  eventUuid: string;
  focussedEventDto: EventDto = new EventDto('', '', '', '', '', '', '', 0, 0, false);

  private routeSub: Subscription;

  constructor(
    private constants: Constants,
    private fb: FormBuilder,
    private apiHttpService: ApiHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params); // log the entire params object
      console.log(params[PromoterConstants.EVENT_ID_PARAM]); // log the value of id
      this.eventUuid = params[PromoterConstants.EVENT_ID_PARAM];
    });

    this.refreshFocussedEvent();
  }

  private refreshFocussedEvent() {
    // update the events
    this.getEventByUuid().subscribe((res) => {
      this.focussedEventDto = res[0];
      console.log(this.focussedEventDto);
    });
  }

  /*
   * Api calls
   */

  // Event search
  private getEventByUuid(): Observable<EventDto[]> {
    return this.apiHttpService.get(
      this.constants.api_url_event + '?' + PromoterConstants.EVENT_ID_PARAM + '=' + this.eventUuid
    );
  }
}
