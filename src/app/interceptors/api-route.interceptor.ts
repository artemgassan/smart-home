import { BASE_URL } from '@/app/consts/api.const';
import type { HttpInterceptorFn } from '@angular/common/http';

export const apiRouteInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({
    url: `${BASE_URL}/api${req.url}`,
  });

  return next(apiReq);
};
