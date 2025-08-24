import { createSelector } from '@ngrx/store';
import type { AppStateType } from '@/app/store/states/app.state';
import type { DashboardStateType } from '@/app/store/states/dashboard.state';

const selectDashboard = (state: AppStateType): DashboardStateType => state.dashboards;

export const selectEditMode = createSelector(
  selectDashboard,
  (state: DashboardStateType) => state.editMode,
);
