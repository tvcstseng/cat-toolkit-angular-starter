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
  focussedEventDto: EventDto = new EventDto('', 'eventName', 'venueName', '', '', '', '', 0, 0, false);

  customer: CustomerDto;

  onboardCustomerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    surname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]], // TODO: valid date validator
    phoneNumber: ['', [Validators.required, Validators.minLength(7)]], // TODO: valid date validator
    address: ['', [Validators.required, Validators.minLength(3)]],
    addressNr: ['', [Validators.required, Validators.minLength(1)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
    state: ['', [Validators.required, Validators.minLength(3)]],
    country: ['', [Validators.required, Validators.minLength(3)]],
    postalCode: ['', [Validators.required, Validators.minLength(3)]],
  });

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

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.customer = this.onboardCustomerForm.value;
    this.apiHttpService.post(this.constants.api_url_onboard_user, this.customer).subscribe(
      (result) => {
        console.log('upload user to onboard: ' + result);
      },
      (error) => {
        console.log(error);
      }
    );
    // touch the resource to update screens
    // this._service.getResource(this.url);
    // console.warn(this.createVenueForm.value);
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
