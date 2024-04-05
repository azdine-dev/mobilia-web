import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from '../model/bus';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api-response';

const AUTH_API = 'http://localhost:8080/api/v1/auth/';
const USER_API = 'http://localhost:8080/api/v1/users/';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class BusService {
  constructor(private http: HttpClient) {}

  addBus(newBus: Bus): Observable<ApiResponse<Bus>> {
    return this.http.post<ApiResponse<Bus>>('your-api-url/add-bus', newBus);
  }
}
