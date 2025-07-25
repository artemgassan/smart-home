import { HttpInterceptorFn } from '@angular/common/http';

export const apiRouteInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
