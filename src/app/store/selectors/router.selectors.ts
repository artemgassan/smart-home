import { getRouterSelectors } from '@ngrx/router-store';
import type { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectRouter = createFeatureSelector<RouterReducerState>('router');

const { selectRouteParams } = getRouterSelectors(selectRouter);

export const selectRouteDashboardId = createSelector(
  selectRouteParams,
  (params) => params?.['dashboardId'] ?? '',
);

export const selectRouteTabId = createSelector(
  selectRouteParams,
  (params) => params?.['tabId'] ?? '',
);
