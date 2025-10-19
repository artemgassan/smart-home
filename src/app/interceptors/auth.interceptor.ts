import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '@/app/services/auth.service';
import { TokenService } from '@/app/services/token.service';
import type { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const authToken = inject(TokenService).getToken();

  if (authToken) {
    const reqWithHeader = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });

    return next(reqWithHeader).pipe(
      catchError((error) => {
        if (error.status === 401) authService.logout();
        return throwError(() => error);
      }),
    );
  }

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) authService.logout();
      return throwError(() => error);
    }),
  );
};
