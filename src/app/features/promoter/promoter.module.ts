import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoterComponent } from '@app/features/promoter/promoter.component';
import { PromoterRoutingModule } from '@app/features/promoter/promoter-routing.module';

@NgModule({
  declarations: [PromoterComponent],
  imports: [CommonModule, PromoterRoutingModule],
})
export class PromoterModule {}
