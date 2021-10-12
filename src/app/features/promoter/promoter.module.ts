import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoterComponent } from '@app/features/promoter/promoter.component';
import { PromoterRoutingModule } from '@app/features/promoter/promoter-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { PromoterListComponent } from './promoter-list/promoter-list.component';
import { PromoterSelectedComponent } from './promoter-selected/promoter-selected.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    PromoterComponent,
    PromoterListComponent,
    PromoterSelectedComponent,
    ManageEventComponent, // TODO: move
    SideBarComponent,
    SideBarComponent,
  ],
  exports: [SideBarComponent],
  imports: [CommonModule, PromoterRoutingModule, ReactiveFormsModule],
})
export class PromoterModule {}
