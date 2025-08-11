import type { Routes } from '@angular/router';
import { authGuard } from '@/app/guards/auth.guard';
import { NotFoundPage } from '@/app/pages/not-found-page/not-found-page';
import { DashboardPage } from '@/app/pages/dashboard-page/dashboard-page';

export const AppRoutes = {
  MAIN: 'main',
  DASHBOARD: 'dashboard',
  LOGIN: 'login',
  NOT_FOUND: 'not_found',
} as const;

type AppRouteType = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<AppRouteType, string> = {
  [AppRoutes.MAIN]: '',
  [AppRoutes.DASHBOARD]: 'dashboard',
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
    path: RoutePath.login,
    title: 'Login | Smart Home',
    loadComponent: () => import('@/app/pages/login-page/login-page').then((m) => m.LoginPage),
  },
  {
    path: RoutePath.dashboard,
    title: 'Smart Home',
    canActivate: [authGuard],
    children: [
      {
        path: ':dashboardId/:tabId',
        component: DashboardPage,
      },
      {
        path: ':dashboardId',
        component: DashboardPage,
      },
      {
        path: '',
        component: DashboardPage,
      },
    ],
  },
  {
    path: RoutePath.not_found,
    title: '404 | Smart Home',
    component: NotFoundPage,
  },
];
