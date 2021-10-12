import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from '@app/features/promoter/promoter-selected/event/event-list/event-list.component';
import { PromoterConstants } from '@app/features/promoter/promoter-constants';

const routes: Routes = [
  {
    path: '',
    component: EventListComponent,
  },
  {
    path: 'new',
    loadChildren: () => import('./event-form/event-form.module').then((m) => m.EventFormModule),
  },
  {
    path: `:${PromoterConstants.EVENT_ID_PARAM}`,
    loadChildren: () => import('./event-selected/event-selected.module').then((m) => m.EventSelectedModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModuleModule {}
