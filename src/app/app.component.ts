import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'nuevoproyecto';


  constructor(private router:Router ){
    addEventListener("hashchange", ()=> {
      document.body.style.transform = `scale(${1})`;
    });
  }

  goRouter(root:string){
    document.body.style.transform = `scale(1)`;
    this.router.navigate([root]);
  }


}
