import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import type { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideEventPlugins } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { apiRouteInterceptor, authInterceptor } from '@/shared/api/interceptors';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideEventPlugins(),
    provideHttpClient(withFetch(), withInterceptors([apiRouteInterceptor, authInterceptor])),
  ],
};
