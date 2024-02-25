import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  
  //providers: inject service -> to make sure singleton(single instance), inject in parent. 
  providers: [provideRouter(routes)]
};
