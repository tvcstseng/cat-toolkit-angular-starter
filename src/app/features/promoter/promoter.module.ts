import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoterComponent } from '@app/features/promoter/promoter.component';
import { PromoterRoutingModule } from '@app/features/promoter/promoter-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { MyEventOverviewComponent } from './my-event-overview/my-event-overview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [PromoterComponent, CreateEventComponent, MyEventOverviewComponent],
  imports: [CommonModule, PromoterRoutingModule, ReactiveFormsModule, FullCalendarModule, TypeaheadModule],
})
export class PromoterModule {}
