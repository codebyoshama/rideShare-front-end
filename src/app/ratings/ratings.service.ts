import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  rateDriver(driverId: number, stars: number, review: string) {
    return this.http.post(`${this.apiUrl}/ratings/${driverId}`, { stars, review });
  }

}
