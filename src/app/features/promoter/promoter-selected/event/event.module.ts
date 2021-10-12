import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EventRoutingModuleModule } from '@app/features/promoter/promoter-selected/event/event-routing-module.module';
import { EventListComponent } from '@app/features/promoter/promoter-selected/event/event-list/event-list.component';

@NgModule({
  declarations: [EventListComponent],
  imports: [CommonModule, ReactiveFormsModule, EventRoutingModuleModule],
})
export class EventModule {}
