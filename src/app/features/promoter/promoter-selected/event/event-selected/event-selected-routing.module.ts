import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardCustomerComponent } from '@app/features/promoter/promoter-selected/event/event-selected/onboard-customer/onboard-customer.component';
import { EventSelectedComponent } from '@app/features/promoter/promoter-selected/event/event-selected/event-selected.component';

const routes: Routes = [
  {
    path: '',
    component: EventSelectedComponent,
  },
  {
    path: 'onboard-customer',
    component: OnboardCustomerComponent,
    outlet: 'detail',
  },
  {
    path: 'edit',
    loadChildren: () => import('../event-form/event-form.module').then((m) => m.EventFormModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventSelectedRoutingModule {}
