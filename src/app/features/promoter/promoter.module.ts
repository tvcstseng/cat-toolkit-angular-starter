import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoterComponent } from '@app/features/promoter/promoter.component';
import { PromoterRoutingModule } from '@app/features/promoter/promoter-routing.module';
import { CreateEventComponent } from './create-event/create-event.component';
import { ShowMyEventsComponent } from './show-my-events/show-my-events.component';

@NgModule({
  declarations: [PromoterComponent, CreateEventComponent, ShowMyEventsComponent],
  imports: [CommonModule, PromoterRoutingModule],
})
export class PromoterModule {}
