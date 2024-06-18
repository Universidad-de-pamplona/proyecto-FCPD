
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/components/login/auth.service';
import { UserService } from 'src/app/pages/auth/services/user.service';




@Component({
  standalone:true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    CommonModule // Agrega esta línea

  ],
})
export class NavbarComponent {
logout() {

  this.user.logout();

  this.goRouter('');


}




  constructor(private router:Router,private auth: AuthService,private user: UserService ){
    addEventListener("hashchange", ()=> {
      document.body.style.transform = `scale(${1})`;
    });
  }
   userName(): string {return this.user.getNameCurrentUser() || "username";}
   logged(){

     return this.auth.isLogged();
   }
  goRouter(root:string){
    document.body.style.transform = `scale(1)`;
    this.router.navigate([root]);
  }


}
