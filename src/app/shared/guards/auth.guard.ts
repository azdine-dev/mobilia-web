import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../routes/routes';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate([routes.login]);
      return false;
    }
  }
}
