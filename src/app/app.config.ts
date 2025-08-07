import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import type { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideEventPlugins } from '@taiga-ui/event-plugins';
import { authInterceptor } from '@/app/interceptors/auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { apiRouteInterceptor } from '@/app/interceptors/api-route.interceptor';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEventPlugins(),
    provideHttpClient(withFetch(), withInterceptors([apiRouteInterceptor, authInterceptor])),
    provideStore(),
  ],
};
