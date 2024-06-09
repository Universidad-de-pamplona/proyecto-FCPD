
import { APP_INITIALIZER, ApplicationConfig, NgModule } from "@angular/core";
import { RouterModule, provideRouter } from "@angular/router";

import { routes} from "./app.routes";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { JwtService } from "./pages/auth/services/jwt.service";
import { UserService } from "./pages/auth/services/user.service";
import { apiInterceptor } from "./core/interceptors/api.interceptor";
import { tokenInterceptor } from "./core/interceptors/token.interceptor";
import { errorInterceptor } from "./core/interceptors/error.interceptor";
import { EMPTY } from "rxjs";

export function initAuth(jwtService: JwtService, userService: UserService) {
  return () => (jwtService.getToken() ? userService.getCurrentUser() : EMPTY);
}



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
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
};

