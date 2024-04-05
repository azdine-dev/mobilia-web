import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bus } from './bus.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class BusService {
  private apiUrl = environment.apiUrl + 'buses';

  constructor(private http: HttpClient) {}

  createBus(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(this.apiUrl, bus, httpOptions);
  }
}
