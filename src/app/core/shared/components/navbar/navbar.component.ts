import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone:true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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
