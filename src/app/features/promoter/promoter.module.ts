import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoterComponent } from '@app/features/promoter/promoter.component';
import { PromoterRoutingModule } from '@app/features/promoter/promoter-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { ShowMyEventsComponent } from './show-my-events/show-my-events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [PromoterComponent, CreateEventComponent, ShowMyEventsComponent],
  imports: [CommonModule, PromoterRoutingModule, ReactiveFormsModule, FullCalendarModule, TypeaheadModule],
})
export class PromoterModule {}
