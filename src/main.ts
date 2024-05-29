import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
addEventListener("hashchange", ()=> {
  document.body.style.transform = `scale(${1})`;
});
