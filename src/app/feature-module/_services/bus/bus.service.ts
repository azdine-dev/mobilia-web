import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bus, BusDto } from './bus.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class BusService {
  private apiUrl = environment.apiUrl + 'buses/';

  constructor(private http: HttpClient) {}

  createBus(bus: BusDto): Observable<Bus> {
    return this.http.post<Bus>(this.apiUrl, bus, httpOptions);
  }

  gettAllBusesForAuthenticatedUser(
    pageNo?: number,
    pageSize?: number
  ): Observable<Bus[]> {
    const params = new HttpParams()
      .set('pageNo', pageNo ? pageNo.toString() : 0)
      .set('pageSize', pageSize ? pageSize.toString() : 10);

    // Add headers if needed
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: params,
    };
    return this.http.get<Bus[]>(this.apiUrl + 'user', httpOptions);
  }
}
