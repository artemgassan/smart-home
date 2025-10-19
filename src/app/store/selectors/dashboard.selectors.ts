import { createSelector } from '@ngrx/store';
import type { MemoizedSelector } from '@ngrx/store';
import type { ItemType } from '@/app/interfaces/cards.interface';
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

export const selectViewData = createSelector(
  selectDashboard,
  (state: DashboardStateType) => state.viewData,
);

export const selectDashboardId = createSelector(
  selectDashboard,
  (state: DashboardStateType) => state.dashboardId,
);

export const selectCardEntities = (
  tabId: string,
): MemoizedSelector<AppStateType, ItemType[] | undefined> =>
  createSelector(
    selectDashboard,
    (state: DashboardStateType) => state.viewData?.tabs[Number(tabId)]?.cards[0]?.items,
  );
