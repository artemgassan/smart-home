import { createSelector } from '@ngrx/store';
import type { AppStateType } from '@/app/store/states/app.state';
import type { DashboardStateType } from '@/app/store/states/dashboard.state';

const selectDashboard = (state: AppStateType): DashboardStateType => state.dashboards;

export const selectEditMode = createSelector(
  selectDashboard,
  (state: DashboardStateType) => state.isEditMode,
);

export const selectOriginalData = createSelector(
  selectDashboard,
  (state: DashboardStateType) => state.originalData,
);

export const selectDraftData = createSelector(
  selectDashboard,
  (state: DashboardStateType) => state.draftData,
);

export const selectDraftDashboardId = createSelector(
  selectDashboard,
  (state: DashboardStateType) => state.dashboardId,
);
