import { CanActivateFn } from "@angular/router";


export const guardLogged:CanActivateFn = (route,state) =>{
  return true;
}
