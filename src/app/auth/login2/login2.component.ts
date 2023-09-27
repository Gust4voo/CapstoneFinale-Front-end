import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-login2',
    templateUrl: './login2.component.html',
    styleUrls: ['./login2.component.scss'],
})
export class Login2Component {
    username: string = '';
    password: string = '';

    constructor(private authService: AuthService) {}

    ngOnInit(): void {}

    login(): void {
        this.authService.login(this.username, this.password).subscribe(
            (response) => {
                // Login effettuato con successo
                const token = this.authService.getToken();
                console.log('Token:', token); // Verifica il token nella console

                //this.router.navigate(['/dashboard']);
                console.log('Login effettuato:', response);
            },
            (error) => {
                console.error('Errore di login:', error);
            }
        );
    }
}
