import type { Routes } from '@angular/router';
import { authGuard } from '@/app/guards/auth.guard';
import { LoginPage } from '@/app/pages/login-page/login-page';
import { NotFoundPage } from '@/app/pages/not-found-page/not-found-page';
import { DashboardPage } from '@/app/pages/dashboard-page/dashboard-page';

export enum AppRoutes {
  MAIN = 'main',
  DASHBOARD = 'dashboard',
  LOGIN = 'login',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '',
  [AppRoutes.DASHBOARD]: 'dashboard/:dashboardId',
  [AppRoutes.LOGIN]: 'login',
  [AppRoutes.NOT_FOUND]: '**',
};

export const routes: Routes = [
  {
    path: RoutePath.main,
    redirectTo: RoutePath.dashboard,
    pathMatch: 'full',
  },
  {
    path: RoutePath.dashboard,
    component: DashboardPage,
    title: 'Smart Home',
    canActivate: [authGuard],
  },
  {
    path: RoutePath.login,
    title: 'Login | Smart Home',
    component: LoginPage,
  },
  {
    path: RoutePath.not_found,
    component: NotFoundPage,
  },
];
