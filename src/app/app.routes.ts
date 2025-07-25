import type { Routes } from '@angular/router';
import { LoginPage } from '@/pages/login-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { DashboardPage } from '@/pages/dashboard-page';

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
    component: LoginPage,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
