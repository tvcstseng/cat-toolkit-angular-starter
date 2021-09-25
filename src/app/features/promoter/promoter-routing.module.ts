import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';
import { RoleGuard } from '@app/@core/auth/role-guard.service';
import { PromoterComponent } from '@app/features/promoter/promoter.component';

const routes: Routes = [
  {
    path: '',
    component: PromoterComponent,
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
