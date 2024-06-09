import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import here


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    addEventListener("hashchange", ()=> {
      document.body.style.transform = `scale(${1})`;
    });
    this.setZoom(1);
    this.formulario = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]

    });
  }

  title="INICIO DE SESIÓN";

   setZoom(zoomLevel: number): void {
    document.body.style.transform = `scale(${zoomLevel})`;
  }
  loginUser(){

    const email = this.formulario.value.email;
    const password = this.formulario.value.password;
    console.log(email+"..."+password);
   // this.logiServise.login(email,password);

      }

}
