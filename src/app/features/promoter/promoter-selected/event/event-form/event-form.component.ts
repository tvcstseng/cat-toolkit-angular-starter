import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/angular';
import { Observable } from 'rxjs';
import { ApiHttpService } from '@app/services/api-http.service';
import { EventDto } from '@app/features/dto/event-dto';
import { VenueDto } from '@app/features/dto/venue-dto';
import { Constants } from '@app/config/constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  eventForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    venue: ['', [Validators.required, Validators.minLength(3)]],
    start: ['', [Validators.required]], // TODO: valid date validator
    end: ['', [Validators.required]], // TODO: valid date validator
    voucherQty: ['', [Validators.required, Validators.minLength(1)]],
    voucherQtyPerCustomer: ['', [Validators.required, Validators.minLength(1)]],
    minAgeControl: new FormControl(''),
  });

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
  };

  focussedEventDto: EventDto = new EventDto('', 'eventName', 'venueName', '', '', '', '', 0, 0, false);

  venueObservable: VenueDto[];
  // events gotten from backend
  Events: EventDto[];

  venueListByName: string[] = [];

  constructor(
    private constants: Constants,
    private fb: FormBuilder,
    private apiHttpService: ApiHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }

  ngOnInit() {
    this.getVenues().subscribe((res) => {
      this.venueObservable = res;
      this.venueListByName = res.map((x) => x.name);
    });

    this.updateEvents();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.createEventForm.value);
    this.focussedEventDto = this.eventForm.value;
    this.focussedEventDto.timeZoneStart = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.focussedEventDto.timeZoneEnd = Intl.DateTimeFormat().resolvedOptions().timeZone;
    this.apiHttpService.post(this.constants.api_url_event, this.focussedEventDto).subscribe(
      (result) => {
        console.log('uploaded event');
        this.updateEvents();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // goback
  // I attempt to close the chat by nullifying the secondary outlet using the PARENT'S
  // ACTIVATED ROUTE.
  public goBack(): void {
    this.router.navigate(['', { outlets: { detail: ['list'] } }], { relativeTo: this.activatedRoute.parent });
    // this.router.navigate(
    //   [
    //     // NOTE: No relative-path navigation is required because we are accessing
    //     // the parent's "activatedRoute" instance. As such, this will be executed
    //     // as if we were doing this in the parent view component.
    //     {
    //       outlets: {
    //         detail: ['list']
    //       }
    //     }
    //   ],
    //   {
    //     relativeTo: this.activatedRoute.parent // <--- PARENT activated route.
    //   }
    // );
  }

  private updateEvents() {
    // update the events
    this.getEvents().subscribe((res) => {
      this.Events = res;
      console.log(this.Events);
      this.setCalendarOptions();
    });
  }

  private setCalendarOptions() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.onDateClick.bind(this),
      events: this.Events,
    };
  }

  /*
   * Api calls
   */

  // Venue search
  private getVenues(): Observable<VenueDto[]> {
    return this.apiHttpService.get(this.constants.api_url_venue);
  }

  // Event search
  private getEvents(): Observable<EventDto[]> {
    return this.apiHttpService.get(this.constants.api_url_event);
  }
}
