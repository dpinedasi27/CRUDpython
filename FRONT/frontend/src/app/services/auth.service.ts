import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:5000/users'; // URL del backend Flask
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}

  signUp(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, user);
  }

  logIn(username: string, password: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/`); // Obtiene la lista de usuarios
  }

  setAuthenticated(status: boolean) {
    this.isAuthenticated = status;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}


