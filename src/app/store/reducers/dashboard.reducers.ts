import { createReducer, on } from '@ngrx/store';
import { initialDashboardState } from '@/app/store/states/dashboard.state';
import type { DashboardStateType } from '@/app/store/states/dashboard.state';
import { enterEditMode, exitEditMode, toggleEditMode } from '@/app/store/actions/dashboard.actions';

export const dashboardReducers = createReducer(
  initialDashboardState,

  on(enterEditMode, (state): DashboardStateType => ({ ...state, editMode: true })),
  on(exitEditMode, (state): DashboardStateType => ({ ...state, editMode: false })),
  on(toggleEditMode, (state): DashboardStateType => ({ ...state, editMode: !state.editMode })),
);
