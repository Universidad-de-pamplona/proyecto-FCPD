import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
//import firebase from 'firebase/compat/app'
//import  'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'api/login';
  constructor(private router:Router ,private cookie:CookieService, private http: HttpClient) { }

  token!: string;
  loged!: boolean;
  login(username:string,password:string):Observable<any>{

    /*firebase.auth().signInWithEmailAndPassword(email,password).then(res=>{
      console.log("se autentico")
      console.log(res)
      firebase.auth().currentUser?.getIdToken().then((token)=>{
        this.token=token;

        this.cookie.set("token",this.token);

        this.router.navigate(['/home']);
        this.loged=true;
      });
    }).catch(error=>{console.log(error)});*/
    return this.http.post(this.loginUrl, { username, password });
  }




   getIdToken(){

    return this.cookie.get("token");

   }

   isLogged(){

    return  this.cookie.get("token");

   }

   logout(){
/*
    firebase.auth().signOut().then(()=>{
     // console.log(this.token);
      this.token="";
      this.cookie.set("token",this.token);
      this.router.navigate(['/home']);
      location.reload();
    })*/
   }




}
