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
        this.authService.getCurrentUser().subscribe(response => {
          console.log("Risposta API:", response);
          if (response) {
              this.user = response;
          } else {
              console.error("Risposta API non valida.");
          }
      });
      }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
      }

      logout() {
        this.authService.logout();
        this.router.navigate(['/login2']);
      }

}


