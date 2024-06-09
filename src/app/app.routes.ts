import { Routes , RouterModule} from "@angular/router";
import { NgModule } from '@angular/core';
import { inject } from "@angular/core";
import { UserService } from "./pages/auth/services/user.service";
import { map } from "rxjs/operators";

 export const routes: Routes = [
/*  {
    path: '', redirectTo: '/about', pathMatch: 'full'
  },*/
 {
    path: "about",
    loadChildren: () => import("./pages/about/about.component").then( m => m.AboutComponent),
  },
  {
    path: "login",
    loadChildren: () => import("./pages/auth/components/login/login.component").then(m => m.LoginComponent),

  }

];



