import { inject } from '@angular/core';
import { TokenService } from '@/shared/api/auth';
import type { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(TokenService).getToken();

  if (authToken) {
    const reqWithHeader = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`),
    });

    return next(reqWithHeader);
  }

  return next(req);
};
