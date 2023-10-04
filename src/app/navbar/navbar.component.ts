import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Route, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    user:any;

    constructor(private authService: AuthService, private router: Router){}

    ngOnInit(): void {
        this.user = this.getUserNameFromLocalStorage();
    }

    private getUserNameFromLocalStorage(): string | null {
        return sessionStorage.getItem('username');
    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
      }

      logout() {
        this.authService.logout();
        this.router.navigate(['/login2']);
      }

}


