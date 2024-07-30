import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['expectedRoles'];
    const userRole = this.authService.getRole();

    console.log('Expected Roles:', expectedRoles);  // Log the expected roles
    console.log('User Role:', userRole);  // Log the user role

    if (!expectedRoles.includes(userRole)) {
      console.log('Role not authorized. Redirecting...');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
