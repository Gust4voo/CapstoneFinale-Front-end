import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    username:string="";
    name:string="";
    surname:string="";
    email:string="";
    password:string="";
    role:string="";

    constructor(private authService:AuthService, private router: Router){}

    ngOnInit(): void {}

    register(){
        this.authService.register(this.username, this.name, this.surname, this.email, this.password, this.role).subscribe(
          (response) => {
            console.log('Registrazione effettuata:', response);
            this.router.navigate(['/login']);
          },
          (error) => {
            console.error('Registration error:', error);

          }
        );
      }
}
