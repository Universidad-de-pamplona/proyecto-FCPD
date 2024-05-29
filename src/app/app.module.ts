import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule,Route } from '@angular/router';
import { ProyectsComponent } from './proyects/proyects.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToDoCardComponent } from './to-do-card/to-do-card.component';
import { DoingCardComponent } from './doing-card/doing-card.component';
import { DoneCardComponent } from './done-card/done-card.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const appRoutes:Route[] = [

 // {path:'home', component:HomeComponent},
  {path:'proyects', component:ProyectsComponent },
  {path:'about', component:AboutComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'login', component:LoginComponent},
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
    DoneCardComponent

  ],
  imports: [
    BrowserModule,ReactiveFormsModule,  RouterModule.forRoot(appRoutes)

  ],
  providers:  [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
