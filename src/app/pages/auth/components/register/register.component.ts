import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
//import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
onSubmit() {
 // if(!confirm("Quieres loguearte?")) return
    //console.log("hola mundo",this.loginForm.valid);

    if (this.regForm.value.password !==this.regForm.value.passwordConfirm) {
      alert("the password aren't equals");
    }
    if (this.regForm.valid) {
      console.log("hola mundo",this.regForm.value);
      this.userService.register(
        this.regForm.value,

      ).subscribe(
        success =>{console.log('Register exitoso', success);
          this.router.navigate(["login"]);
        } ,
        error => console.error('Error en login', error)
      );
    }
}

  regForm: FormGroup;
  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) {
 this.regForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]]

    });

    this.regForm.get('passwordConfirm')?.setValidators([
      Validators.required,
      this.passwordMatchValidator.bind(this) // Vincula el contexto a la función del validador
    ]);

  }

  passwordMatchValidator(control:any) {
    const form = this.regForm.value;
    const passwordConfirm = control.value;
  const password = form.password
    if (password !== passwordConfirm) {

      return { passwordMismatch: true };
    }

    return null;
  }

  ngOnInit()
  {
    addEventListener(
      "hashchange",
       ()=> {document.body.style.transform = `scale(${1})`;}
      );
    this.setZoom(1);
  }

  setZoom(zoomLevel: number): void {
    document.body.style.transform = `scale(${zoomLevel})`;
  }

}
