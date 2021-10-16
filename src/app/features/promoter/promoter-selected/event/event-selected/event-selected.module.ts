import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventSelectedRoutingModule } from './event-selected-routing.module';
import { EventViewComponent } from './event-view/event-view.component';

@NgModule({
  declarations: [EventViewComponent],
  imports: [CommonModule, EventSelectedRoutingModule, ReactiveFormsModule],
})
export class EventSelectedModule {}
