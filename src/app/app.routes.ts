import type { Routes } from '@angular/router';
import { LoginPage } from '@/app/pages/login-page/login-page';
import { NotFoundPage } from '@/app/pages/not-found-page/not-found-page';
import { DashboardPage } from '@/app/pages/dashboard-page/dashboard-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  },
  {
    path: 'login',
    title: 'Login | Smart Home',
    component: LoginPage,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
