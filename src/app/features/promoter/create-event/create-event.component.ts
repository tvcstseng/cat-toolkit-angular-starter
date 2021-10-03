import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/angular';
import { Observable } from 'rxjs';
import { ApiHttpService } from '@app/services/api-http.service';
import { EventDto } from '@app/features/dto/event-dto';
import { VenueDto } from '@app/features/dto/venue-dto';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '@core/auth/auth.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss'],
})
export class CreateEventComponent implements OnInit {
  createEventForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    venue: ['', [Validators.required, Validators.minLength(3)]],
    dateStartControl: ['', [Validators.required]], // TODO: valid date validator
    dateEndControl: ['', [Validators.required]], // TODO: valid date validator
    minAgeControl: new FormControl(''),
  });

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
  };

  eventDto: EventDto = new EventDto('', 'eventName', 'venueName');

  venueObservable: VenueDto[];

  venueList: string[] = [];

  private url = 'http://localhost:9081/resource-server/api/event/';
  private venueUrl = 'http://localhost:9081/resource-server/api/venue/';

  constructor(private fb: FormBuilder, private authService: AuthService, private apiHttpService: ApiHttpService) {}

  ngOnInit() {
    this.getVenues().subscribe((res) => {
      this.venueObservable = res;
      this.venueList = res.map((x) => x.name);
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.createEventForm.value);
    this.eventDto = this.createEventForm.value;
    this.apiHttpService.post(this.url, this.eventDto).subscribe(
      (result) => {
        console.log('upload event: ' + result);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Venue search
  getVenues(): Observable<VenueDto[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + this.authService.accessToken,
    });
    return this.apiHttpService.get(this.venueUrl, headers);
  }

  handleChange() {
    this.getVenues();
  }
}
