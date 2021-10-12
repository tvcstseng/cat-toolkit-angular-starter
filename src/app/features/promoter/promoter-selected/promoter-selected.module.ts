import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PromoterSelectedRoutingModule } from './promoter-selected-routing.module';
import { PromoterViewComponent } from './promoter-view/promoter-view.component';

@NgModule({
  declarations: [PromoterViewComponent],
  imports: [CommonModule, PromoterSelectedRoutingModule, ReactiveFormsModule],
})
export class PromoterSelectedModule {}
