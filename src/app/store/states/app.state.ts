import type { RouterReducerState } from '@ngrx/router-store';
import { initialTabState } from '@/app/store/states/tab.state';
import type { TabStateType } from '@/app/store/states/tab.state';
import { initialDashboardState } from '@/app/store/states/dashboard.state';
import type { DashboardStateType } from '@/app/store/states/dashboard.state';

export type AppStateType = {
  router?: RouterReducerState;
  tabs: TabStateType;
  dashboards: DashboardStateType;
};

export const initialAppState: AppStateType = {
  tabs: initialTabState,
  dashboards: initialDashboardState,
};

export function getInitialState(): AppStateType {
  return initialAppState;
}
