import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromoterViewComponent } from './promoter-view/promoter-view.component';

const routes: Routes = [
  {
    path: '',
    component: PromoterViewComponent,
  },
  {
    path: 'edit',
    loadChildren: () => import('../promoter-form/promoter-form.module').then((m) => m.PromoterFormModule),
  },
  {
    path: 'events',
    loadChildren: () => import('./event/event.module').then((m) => m.EventModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoterSelectedRoutingModule {}
