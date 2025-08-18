import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouter } from '@angular/router';
import type { ApplicationConfig } from '@angular/core';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEventPlugins } from '@taiga-ui/event-plugins';
import { getInitialState } from '@/app/store/states/app.state';
import { appReducers } from '@/app/store/reducers/app.reducers';
import { provideZoneChangeDetection, isDevMode } from '@angular/core';
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
    provideStore(appReducers, { initialState: getInitialState }),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(),
  ],
};
