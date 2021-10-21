import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventSelectedRoutingModule } from './event-selected-routing.module';
import { EventViewComponent } from './event-view/event-view.component';
import { EventSelectedSidebarComponent } from './event-selected-sidebar/event-selected-sidebar.component';
import { OnboardCustomerComponent } from './onboard-customer/onboard-customer.component';
import { EventSelectedComponent } from '@app/features/promoter/promoter-selected/event/event-selected/event-selected.component';

@NgModule({
  declarations: [EventSelectedComponent, EventSelectedSidebarComponent, EventViewComponent, OnboardCustomerComponent],
  imports: [CommonModule, EventSelectedRoutingModule, ReactiveFormsModule],
})
export class EventSelectedModule {}
