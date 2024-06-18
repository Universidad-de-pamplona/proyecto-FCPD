// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { JwtService } from "./jwt.service";
import { map, distinctUntilChanged, tap, shareReplay } from "rxjs/operators";
import { User } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/services/request.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  getNameCurrentUser(): string | null{
    const user = localStorage.getItem('user');
    const name = user ? JSON.parse(user).username : "username"; // Use conditional operator
    return name;
  }

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());


  public isAuthenticated = this.currentUser.pipe(map((user) => !!user));


  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService,
    private readonly router: Router,
    private request: RequestService

  ) {}

  ;

  register(credentials: {
    username: string;
    email: string;
    password: string;
  }): Observable<{ user: User }> {
    return this.request.makeRequest({ url: 'auth/register', data: credentials, method: 'POST' })
  }
  logout(): void {

    this.purgeAuth();
     this.router.navigate(["/"]);
  }

  getCurrentUser(): Observable<{ user: User }> {
    const user = localStorage.getItem('user');
    const name = user ? JSON.parse(user).username : "username"; // Use conditional operator
    return name;
  }

 /* update(user: Partial<User>): Observable<{ user: User }> {
    return this.http.put<{ user: User }>("/user", { user }).pipe(
      tap(({ user }) => {
        this.currentUserSubject.next(user);
      }),
    );
  }*/

  setAuth(user: User): void {

    this.jwtService.saveToken(user.token);

    this.currentUserSubject.next(user);
  }

  purgeAuth(): void {
    this.jwtService.removeToken();
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }


}
