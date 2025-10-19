import { environment } from '@/environments/environment';
import type { HttpInterceptorFn } from '@angular/common/http';

export const apiRouteInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({
    url: `${environment.apiUrl}/api${req.url}`,
  });

  return next(apiReq);
};
