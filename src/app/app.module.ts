import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule,Route } from '@angular/router';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToDoCardComponent } from './pages/proyects/components/to-do-card/to-do-card.component';
import { DoingCardComponent } from './pages/proyects/components/doing-card/doing-card.component';
import { DoneCardComponent } from './pages/proyects/components/done-card/done-card.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { initAuth } from './app.config';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { JwtService } from './pages/auth/services/jwt.service';
import { UserService } from './pages/auth/services/user.service';
import { RegisterComponent } from './pages/auth/components/register/register.component';
import { NavbarComponent } from './core/shared/components/navbar/navbar.component';
import { FooterComponent } from './core/shared/components/footer/footer.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const appRoutes:Route[] = [

 // {path:'home', component:HomeComponent},
  {path:'proyects', component:ProyectsComponent },
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
    AboutComponent,
    ContactsComponent,
    ErrorComponent,
    LoginComponent,
    ToDoCardComponent,
    DoingCardComponent,
    DoneCardComponent,
    RegisterComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,ReactiveFormsModule,  RouterModule.forRoot(appRoutes),NavbarComponent

  ],
  providers:  [
    CookieService,
    provideHttpClient(
      withInterceptors([apiInterceptor, tokenInterceptor, errorInterceptor]),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initAuth,
      deps: [JwtService, UserService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})





export class AppModule { }
