
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private apiUrl = 'https://api.example.com'; // Cambia esto a tu URL de backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Método para guardar el token en el local storage o en una cookie
  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  // Método para obtener el token guardado
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Método para eliminar el token
  removeToken(): void {
    localStorage.removeItem('access_token');
  }


}
