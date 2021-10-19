import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from '@app/features/promoter/promoter-selected/event/event-list/event-list.component';
import { PromoterConstants } from '@app/features/promoter/promoter-constants';
import { EventComponent } from '@app/features/promoter/promoter-selected/event/event.component';
import { AuthGuard } from '@core/auth/auth-guard.service';
import { RoleGuard } from '@core/auth/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'Promoter',
    },
  },
  {
    path: 'list',
    component: EventListComponent,
    outlet: 'detail',
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'Promoter',
    },
  },
  {
    path: 'new',
    loadChildren: () => import('./event-form/event-form.module').then((m) => m.EventFormModule),
    outlet: 'detail',
  },
  {
    path: `:${PromoterConstants.EVENT_ID_PARAM}`,
    loadChildren: () => import('./event-selected/event-selected.module').then((m) => m.EventSelectedModule),
    // outlet: 'detail',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModuleModule {}
