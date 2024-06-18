import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
//import { AuthService } from 'src/app/pages/auth/components/login/auth.service';
import { LoginData } from '../models/login.model';
import { Observable ,from  } from 'rxjs';
import { JwtService } from 'src/app/pages/auth/services/jwt.service';
//import qs from 'qs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

 BASE_URL:string = 'http://localhost:8080/api';
  constructor( private jwt:JwtService) {

  }
  onInit(){

  /*    axios.interceptors.response.use( function (response)
 {
    return response;
  }, function (error) {
    if (error.status === 401) {
      this.auth.logout();
    }
    return Promise.reject(error);
  });*/
  }










  makeRequest = (params: AxiosRequestConfig):Observable<any> => {
    console.log("axiosConf",params)
    return from(axios({
      ...params,
      baseURL: this.BASE_URL
    }));
  }

 makePrivateRequest = (params: AxiosRequestConfig) => {
    const sessionData =this.jwt.getToken() ?? JSON.parse(localStorage.getItem('authData')  ?? '{}');
    //console.log("sessionData..",sessionData.data.token)
    const headers = {
      'Authorization': `Bearer ${sessionData}`
    }

    return this.makeRequest({ ...params, headers });

  }

    makeLogin = (loginData: LoginData):Observable<any> => {
    //const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

    /*const headers = {
      Authorization: `Basic ${window.btoa(token)}`,
      'Content-Type': 'X-Requested-With'
    }*/
    const headers = {
      'Content-Type': 'application/json'
    }

   // const payload = qs.stringify({ ...loginData, grant_type: 'password' });
   console.log(loginData)
   const credentials = loginData
  console.log(credentials);
    return this.makeRequest({ url: 'auth/login', data: credentials, method: 'POST', headers });

  }








}
