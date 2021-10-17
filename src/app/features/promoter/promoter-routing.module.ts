import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoterComponent } from '@app/features/promoter/promoter.component';
import { PromoterConstants } from '@app/features/promoter/promoter-constants';
import { RoleGuard } from '@core/auth/role-guard.service';
import { AuthGuard } from '@core/auth/auth-guard.service';
import { PromoterFormComponent } from '@app/features/promoter/promoter-form/promoter-form.component';

const routes: Routes = [
  {
    path: '',
    component: PromoterComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'Promoter',
    },
  },
  {
    path: 'new',
    loadChildren: () => import('./promoter-form/promoter-form.module').then((m) => m.PromoterFormModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'Promoter',
    },
  },
  {
    path: `:${PromoterConstants.PROMOTER_ID_PARAM}`,
    loadChildren: () => import('./promoter-selected/promoter-selected.module').then((m) => m.PromoterSelectedModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'Promoter',
    },
  },
  {
    path: 'new',
    component: PromoterFormComponent,
    outlet: 'detail',
  },
  // { path: '', component: PromoterComponent },
  // {
  //   path: `:${PromoterConstants.PROMOTER_ID_PARAM}`,
  //   component: PromoterComponent,
  //   children: [
  //     { path: '', redirectTo: 'event-list', pathMatch: 'full' },
  //     { path: 'event-list', component: EventListComponent },
  //     { path: 'event-form', component: EventFormComponent },
  //     { path: `event-list/:${PromoterConstants.EVENT_ID_PARAM}/manage-event`, component: ManageEventComponent },
  //     { path: '**', redirectTo: 'event-list' },
  //   ],
  //   canActivate: [AuthGuard, RoleGuard],
  //   data: {
  //     role: 'Promoter',
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoterRoutingModule {}
