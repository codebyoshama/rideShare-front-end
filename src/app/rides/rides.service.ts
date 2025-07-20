import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }


  getRideById(id: number) {
    return this.http.get(`${this.apiUrl}/rides/${id}`);
  }

  getRidesByDriver(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/rides/driver/${email}`);
  }


  createRide(ride: any) {
    return this.http.post(`${this.apiUrl}/rides`, ride);
  }

  updateRide(ride: any) {
    return this.http.put(`${this.apiUrl}/rides/${ride.id}`, ride);
  }


  deleteRide(id: number) {
    return this.http.delete(`${this.apiUrl}/rides/${id}`);
  }





}
