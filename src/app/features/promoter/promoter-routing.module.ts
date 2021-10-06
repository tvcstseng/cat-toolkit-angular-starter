import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';
import { RoleGuard } from '@app/@core/auth/role-guard.service';
import { PromoterComponent } from '@app/features/promoter/promoter.component';
import { CreateEventComponent } from '@app/features/promoter/create-event/create-event.component';
import { MyEventOverviewComponent } from '@app/features/promoter/my-event-overview/my-event-overview.component';
import { PromoterConstants } from '@app/features/promoter/promoter-constants';
import { ManageEventComponent } from '@app/features/promoter/manage-event/manage-event.component';

const routes: Routes = [
  { path: '', component: PromoterComponent },
  {
    path: `:${PromoterConstants.PROMOTER_ID_PARAM}`,
    component: PromoterComponent,
    children: [
      { path: '', redirectTo: 'my-event-overview', pathMatch: 'full' },
      { path: 'my-event-overview', component: MyEventOverviewComponent },
      { path: 'create-event', component: CreateEventComponent },
      { path: `my-event-overview/:${PromoterConstants.EVENT_ID_PARAM}/manage-event`, component: ManageEventComponent },
      { path: '**', redirectTo: 'my-event-overview' },
    ],
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'Promoter',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoterRoutingModule {}
