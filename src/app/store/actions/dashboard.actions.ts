import { createActionGroup, props } from '@ngrx/store';

export const DashboardActions = createActionGroup({
  source: 'Dashboard',
  events: {
    'Set Active Dashboard ID': props<{ id: string }>(),
  },
});
