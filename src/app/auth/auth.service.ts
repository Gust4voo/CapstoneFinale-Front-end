import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser: any = null;


    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
        const credentials = { username, password };
        return this.http
            .post<any>('http://localhost:8080/api/auth/login', credentials)
            .pipe(
                map((response) => {
                    if (response.accessToken) {
                        console.log('Token:', response.accessToken);
                        localStorage.setItem('token', response.accessToken);
                    }
                    return response;
                })
            );
    }

    register(
        username: String,
        name: String,
        surname: string,
        email: string,
        password: string,
    ): Observable<any> {
        const newUser = { username, name, surname, email, password, };
        return this.http.post<any>(
            'http://localhost:8080/api/auth/register',
            newUser
        );
    }

    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username')
        alert('CIAO,RIEFFETTUA IL LOGIN PER ACCEDERE');
    }

    isLoggedIn(): boolean {
        return !!sessionStorage.getItem('token');
    }

    getToken(): string | null {
        return sessionStorage.getItem('token');
    }

    getCurrentUser(): Observable<any> {
        if (this.currentUser) {
            console.log('Returning cached user:', this.currentUser);
            return of(this.currentUser);
        }

        return this.http.get<any>('http://localhost:8080/api/auth/user').pipe(
            map((response) => {
                console.log('API Response:', response);
                if (!response) {
                    throw new Error('Invalid API Response');
                }
                this.currentUser = response;
                console.log('Setting current user:', this.currentUser);
                return this.currentUser;
            }),
            catchError((error) => {
                console.error('API Error:', error);
                return throwError(error);
            })
        );
    }}
