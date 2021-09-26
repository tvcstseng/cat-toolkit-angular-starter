import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from '@app/services/toast.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private toastService: ToastService) {}

  // https://javascript.plainenglish.io/4-ways-to-check-whether-the-property-exists-in-a-javascript-object-20c2d96d8f6e
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let result;
    if (!!route.data.role) {
      const routeRoles = route.data.role;
      result = this.authService.canActivate(routeRoles);
    }
    return result;
  }

  // ngbmodal service
  showToaster(title: string, message: string) {
    this.toastService.show(message, {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true,
      headertext: title,
    });
  }
}
