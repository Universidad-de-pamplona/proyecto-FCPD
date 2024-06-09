import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './core/shared/components/navbar/navbar.component';



@Component({

  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent  {
  title = 'nuevoproyecto';


  constructor(private router:Router ){
    addEventListener("hashchange", ()=> {
      document.body.style.transform = `scale(${1})`;
    });
  }




}
