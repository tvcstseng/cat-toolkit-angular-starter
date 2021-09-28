import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';
import { RoleGuard } from '@app/@core/auth/role-guard.service';
import { PromoterComponent } from '@app/features/promoter/promoter.component';
import { CreateEventComponent } from '@app/features/promoter/create-event/create-event.component';
import { ShowMyEventsComponent } from '@app/features/promoter/show-my-events/show-my-events.component';

const routes: Routes = [
  {
    path: '',
    component: PromoterComponent,
    children: [
      { path: 'create-event', component: CreateEventComponent },
      { path: 'show-my-events', component: ShowMyEventsComponent },
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
