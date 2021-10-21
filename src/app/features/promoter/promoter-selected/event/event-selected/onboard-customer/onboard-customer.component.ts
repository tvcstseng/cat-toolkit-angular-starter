import { Component, OnInit } from '@angular/core';
import { EventDto } from '@app/features/dto/event-dto';
import { CustomerDto } from '@app/features/dto/customer-dto';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Constants } from '@app/config/constants';
import { ApiHttpService } from '@app/services/api-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onboard-customer',
  templateUrl: './onboard-customer.component.html',
  styleUrls: ['./onboard-customer.component.scss'],
})
export class OnboardCustomerComponent implements OnInit {
  eventUuid: string;
  focussedEventDto: EventDto = new EventDto('', '', '', '', '', '', '', 0, 0, false);

  customer: CustomerDto;

  onboardCustomerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]], // TODO: valid date validator
  });

  private routeSub: Subscription;

  constructor(
    private constants: Constants,
    private fb: FormBuilder,
    private apiHttpService: ApiHttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

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
}
