import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { ShouldLoginComponent } from './should-login.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'promoter',
      loadChildren: () => import('./features/promoter/promoter.module').then((m) => m.PromoterModule),
      // data: {role: 'Promoter'},
    },
    {
      path: 'booker',
      loadChildren: () => import('./features/booker/booker.module').then((m) => m.BookerModule),
      // data: {role: 'Booker'},
    },
    {
      path: 'employee',
      loadChildren: () => import('./features/employee/employee.module').then((m) => m.EmployeeModule),
      // data: {role: 'Employee'},
    },
    {
      path: 'position',
      loadChildren: () => import('./features/position/position.module').then((m) => m.PositionModule),
      // data: {role: 'Manager'},
    },
    {
      path: 'admin',
      loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
      // data: {role: 'Manager'},
    },
    {
      path: 'manager',
      loadChildren: () => import('./features/manager/manager.module').then((m) => m.ManagerModule),
    },
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    },
  ]),

  { path: 'should-login', component: ShouldLoginComponent },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // TODO: Remove for prod debugging purposes only
      preloadingStrategy: PreloadAllModules,
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
