import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '@app/@core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;

  isAuthenticated: Observable<boolean>;

  hasRolePromoter$: Observable<boolean>;
  hasRoleBooker$: Observable<boolean>;
  hasRoleEmployee$: Observable<boolean>;
  hasRoleManager$: Observable<boolean>;
  hasRoleHrAdmin$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated = authService.isAuthenticated$;
  }

  ngOnInit() {
    this.hasRolePromoter$ = this.authService.canActivate('Promoter');
    this.hasRoleBooker$ = this.authService.canActivate('Booker');
    this.hasRoleEmployee$ = this.authService.canActivate('Employee');
    this.hasRoleManager$ = this.authService.canActivate('Manager');
    this.hasRoleHrAdmin$ = this.authService.canActivate('HrAdmin');
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  login() {
    this.authService.login();
  }

  logout() {
    // this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
    this.authService.logout();
  }

  // get username(): string | null {
  //   this.profileData$ = this.authService.;
  //   this.profileData$.subscribe((data) => {
  //     this.name = data.name;
  //     //console.log (this.name)
  //   });
  //   return this.name ? this.name : null;
  // }

  get username(): string | null {
    return this.authService.identityClaims ? (this.authService.identityClaims as any)['email'] : null;
  }
}
