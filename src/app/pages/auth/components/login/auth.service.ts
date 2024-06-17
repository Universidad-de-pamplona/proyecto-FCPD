import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
//import firebase from 'firebase/compat/app'
//import  'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/core/models/login.model';
import { RequestService } from 'src/app/core/services/request.service';
import { JwtService } from '../../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = '/login';
  constructor(private router:Router ,private cookie:CookieService, private request: RequestService , private jwtservice: JwtService) { }

  token!: string;
  loged!: boolean;
  login(credentials:{email:string,password:string}):Observable<any>{



    return this.request.makeLogin(credentials);
  }




   getIdToken(){

    return this.cookie.get("token");

   }

   isLogged(){

    return  this.jwtservice.getToken() ?? false;

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


 getSessionData () {
    try {const sessionData = localStorage.getItem('authData') ?? '{}';
    const parsedSessionData = JSON.parse(sessionData);
   //console.log(".l.",parsedSessionData.data.user)
    return parsedSessionData as LoginResponse;
  }catch(err){
    console.log(err)
    return undefined;
  }
  }

}
