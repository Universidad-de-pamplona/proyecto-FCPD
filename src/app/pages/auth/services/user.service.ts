// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com'; // Cambia esto a tu URL de backend

  constructor(private http: HttpClient) {}

  getUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${userId}`, userData);
  }

  getCurrentUser(){
    return "user";
  }
  isAuthenticated(){
    return true;
  }

}
