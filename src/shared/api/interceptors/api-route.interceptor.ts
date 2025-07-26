import { BASE_URL } from '@/shared/config/constants';
import type { HttpInterceptorFn } from '@angular/common/http';

export const apiRouteInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({
    url: `${BASE_URL}/api${req.url}`,
  });

  return next(apiReq);
};
