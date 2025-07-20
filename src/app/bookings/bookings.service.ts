import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private apiUrl = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) { }

  bookRide(data: any) {
    return this.http.post(`${this.apiUrl}/bookings`, data);
  }

  getMyBookings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/mybookings`);
  }

  getBookingsForDriver(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/bookings/driver/bookings`);
  }

  cancelBooking(id: number) {
    return this.http.delete(`${this.apiUrl}/bookings/${id}`);
  }

}
