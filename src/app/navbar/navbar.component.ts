import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    user:any;

    constructor(private authService: AuthService, private router: Router){}

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
      }

      logout() {
        this.authService.logout();
        this.router.navigate(['/login2']);
      }

}


