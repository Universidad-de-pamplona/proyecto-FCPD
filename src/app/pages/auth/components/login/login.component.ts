import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import here
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {
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
   /* if (this.loginForm.valid) {
      this..login(
        this.loginForm.value.username,
        this.loginForm.value.password
      ).subscribe(
        success => console.log('Login exitoso', success),
        error => console.error('Error en login', error)
      );*/
    }


}
