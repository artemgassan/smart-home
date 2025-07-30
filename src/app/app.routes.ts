import type { Routes } from '@angular/router';
import { authGuard } from '@/app/guards/auth.guard';
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
    title: 'Smart Home',
    canActivate: [authGuard],
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
