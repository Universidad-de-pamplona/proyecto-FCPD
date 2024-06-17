import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyect-form',
  templateUrl: './proyect-form.component.html',
  styleUrls: ['./proyect-form.component.css']
})
export class ProyectFormComponent {
proyectForm: FormGroup;

constructor(private fb: FormBuilder ) {
  this.proyectForm = this.fb.group({
       email: ['', Validators.required],
       password: ['', [Validators.required]]

     });

   }
onSubmit() {


}

}
