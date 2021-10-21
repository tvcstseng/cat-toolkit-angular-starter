import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PromoterSelectedRoutingModule } from './promoter-selected-routing.module';
import { PromoterViewComponent } from './promoter-view/promoter-view.component';
import { EventComponent } from './event/event.component';
import { EventModule } from '@app/features/promoter/promoter-selected/event/event.module';

@NgModule({
  declarations: [PromoterViewComponent, EventComponent],
  imports: [CommonModule, PromoterSelectedRoutingModule, ReactiveFormsModule, EventModule],
  exports: [EventComponent],
})
export class PromoterSelectedModule {}
