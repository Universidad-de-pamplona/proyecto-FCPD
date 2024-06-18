import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
//import { ProyectFormComponent } from './pages/proyects/components/proyect-form/proyect-form.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { RegisterComponent } from './pages/auth/components/register/register.component';
import { FooterComponent } from './core/shared/components/footer/footer.component';
import { NavbarComponent } from './core/shared/components/navbar/navbar.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { KanbanComponent } from './pages/proyects/components/kanban/kanban.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './pages/auth/components/login/auth.service';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { ProyectFormComponent } from './pages/proyects/components/proyect-form/proyect-form.component';


const appRoutes:Route[] = [



  {path:'proyects', component:ProyectsComponent ,children: [

    { path: 'kanban', component: KanbanComponent },
    { path: 'create', component: ProyectFormComponent },
]},

  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  //{path:'logout', component:LogoutComponent},
  {path:'**', component:ErrorComponent}//muy importante que el path a pagina de error este de ultimo
 ];


@NgModule({
  declarations: [
    AppComponent,
    ProyectsComponent,
     ContactsComponent,

     AboutComponent,
     ContactsComponent,
     ErrorComponent,
     LoginComponent,

     RegisterComponent,
     FooterComponent,
     ProyectFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     CommonModule,
     RouterModule.forRoot(appRoutes),
     NavbarComponent,
     HttpClientModule,
     KanbanComponent,
     ReactiveFormsModule
  ],
  providers:  [
    CookieService,
    AuthService,
    provideHttpClient(
      withInterceptors([apiInterceptor, tokenInterceptor, errorInterceptor]),
    ),


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
