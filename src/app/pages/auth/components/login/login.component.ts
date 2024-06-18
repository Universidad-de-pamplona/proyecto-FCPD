import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import here
import { AuthService } from './auth.service';
import { JwtService } from '../../services/jwt.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  //private auth: AuthService
  constructor(private fb: FormBuilder ,private auth: AuthService ,private jwtservice:JwtService , private router: Router) {
 this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]

    });

  }

  ngOnInit() {
    addEventListener("hashchange", ()=> {
      document.body.style.transform = `scale(${1})`;
    });


    this.setZoom(1);


  }


  title="INICIO DE SESIÓN";


   setZoom(zoomLevel: number): void {
    document.body.style.transform = `scale(${zoomLevel})`;
  }
  onSubmit() {
   // if(!confirm("Quieres loguearte?")) return
    //console.log("hola mundo",this.loginForm.valid);
    if (this.loginForm.valid) {
      console.log("hola mundo",this.loginForm.value.email,this.loginForm.value.password);
      this.auth.login(
        this.loginForm.value,

      ).subscribe(
        success =>{
          console.log('Login exitoso', success);
          this.jwtservice.saveToken(success.data.token);
          localStorage.setItem('user',JSON.stringify(success.data.user) );
          this.router.navigate(['proyects']);


        },
        error => console.error('Error en login', error)
      );
    }
  }


}
