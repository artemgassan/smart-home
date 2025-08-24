import { createReducer, on } from '@ngrx/store';
import { toggleEditMode } from '@/app/store/actions/dashboard.actions';
import { initialDashboardState } from '@/app/store/states/dashboard.state';
import type { DashboardStateType } from '@/app/store/states/dashboard.state';

export const dashboardReducers = createReducer(
  initialDashboardState,

  on(toggleEditMode, (state): DashboardStateType => ({ ...state, eitMode: !state.eitMode })),
);
