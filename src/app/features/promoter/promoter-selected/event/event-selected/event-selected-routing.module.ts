import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventViewComponent } from './event-view/event-view.component';

const routes: Routes = [
  {
    path: '',
    component: EventViewComponent,
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
