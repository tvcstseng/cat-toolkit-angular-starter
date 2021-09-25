import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/@core/auth/auth-guard.service';
import { RoleGuard } from '@app/@core/auth/role-guard.service';
import { BookerComponent } from '@app/features/booker/booker.component';

const routes: Routes = [
  {
    path: '',
    component: BookerComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'Booker',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookerRoutingModule {}
