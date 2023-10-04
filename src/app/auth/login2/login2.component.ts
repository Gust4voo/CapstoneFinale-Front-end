import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-login2',
    templateUrl: './login2.component.html',
    styleUrls: ['./login2.component.scss'],
})
export class Login2Component implements OnInit{
    username: string = '';
    password: string = '';

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        window.scrollTo(0,0)}

    login(): void {
        this.authService.login(this.username, this.password).subscribe(
            (response) => {
                // Login effettuato con successo
                const token = this.authService.getToken();
                console.log(response.username);
                sessionStorage.setItem("username",response.username)
                sessionStorage.setItem("token",response.accessToken)

                this.router.navigate(['']);
                console.log('Login effettuato:', response);
            },
            (error) => {
                console.error('Errore di login:', error);


            }
        );
    }
}
