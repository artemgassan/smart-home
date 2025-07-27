import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { TokenService } from '@/app/services/token.service';
import type { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const authToken = tokenService.getToken();
  const router = inject(Router);

  if (authToken) {
    const reqWithHeader = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });

    return next(reqWithHeader).pipe(
      catchError((error) => {
        if (error.status === 401) {
          tokenService.clearToken();
          router.navigate(['/login']);
        }
        return throwError(() => error);
      }),
    );
  }

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        router.navigate(['/login']);
      }
      return throwError(() => error);
    }),
  );
};
