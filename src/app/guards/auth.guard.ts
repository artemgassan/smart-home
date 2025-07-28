import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@/app/services/auth.service';
import type { CanActivateFn, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (): boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuth = authService.isAuth();

  if (isAuth) return true;
  return router.createUrlTree(['/login']);
};
