import type { Routes } from '@angular/router';
import { Dashboard } from '@/widgets/dashboard';
import { NotFoundPage } from '@/pages/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
