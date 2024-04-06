import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../routes/routes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiResponse } from '../model/api-response';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

const AUTH_API = environment.apiUrl + 'auth/';
const USER_API = environment.apiUrl + 'users/';
const TOKEN_KEY = 'auth-token';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  public signin(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  public signup(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  getUser(token: string): Observable<ApiResponse<User>> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<ApiResponse<User>>(`${USER_API}`, {
      headers: headers,
    });
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem(TOKEN_KEY);
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }
  public forgotpassword(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.resetPassword]);
  }
  signOut(): void {
    sessionStorage.removeItem(TOKEN_KEY);
  }
}
