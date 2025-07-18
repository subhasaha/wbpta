import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivate() {
    if (!this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['dashboard']);
      return false;
    }
  }

}
