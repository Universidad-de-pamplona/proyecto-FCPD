import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import firebase from 'firebase/compat/app'
//import  'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router ,private cookie:CookieService) { }

  token!: string;
  loged!: boolean;
  login(email:string,password:string){

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

    };



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
