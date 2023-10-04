import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

    private baseURL = 'http://localhost:8080';  // INDIRIZZO BACK-END

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/users`);
  }

  prenotaViaggio(payload: any, gastronomiaId: string): Observable<any> {
    return this.http.post(`${this.baseURL}/prenotazione`, payload);
  }


}
