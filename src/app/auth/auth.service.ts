import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }


  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserProfile() {
    return this.http.get(`${this.apiUrl}/users/profile`);
  }

  updateUserProfile(data: any) {
    return this.http.put(`${this.apiUrl}/users/profile`, data);
  }





}
