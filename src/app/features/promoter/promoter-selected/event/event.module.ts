import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventRoutingModuleModule } from '@app/features/promoter/promoter-selected/event/event-routing-module.module';
import { EventListComponent } from '@app/features/promoter/promoter-selected/event/event-list/event-list.component';
import { EventDashSideBarComponent } from '@app/features/promoter/promoter-selected/event/event-dash-side-bar/event-dash-side-bar.component';

@NgModule({
  declarations: [EventListComponent, EventDashSideBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EventRoutingModuleModule,
    // , Event
  ],
  exports: [EventDashSideBarComponent],
})
export class EventModule {}
