import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EventFormComponent } from '@app/features/promoter/promoter-selected/event/event-form/event-form.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [EventFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TypeaheadModule,
    FullCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventFormComponent,
      },
    ]),
  ],
})
export class EventFormModule {}
