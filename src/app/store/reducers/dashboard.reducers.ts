import {
  saveDraft,
  exitEditMode,
  enterEditMode,
  toggleEditMode,
  discardChanges,
  setOriginalDashboard,
} from '@/app/store/actions/dashboard.actions';
import { createReducer, on } from '@ngrx/store';
import { initialDashboardState } from '@/app/store/states/dashboard.state';
import type { DashboardStateType } from '@/app/store/states/dashboard.state';

export const dashboardReducers = createReducer(
  initialDashboardState,

  on(enterEditMode, (state): DashboardStateType => ({ ...state, isEditMode: true })),
  on(exitEditMode, (state): DashboardStateType => ({ ...state, isEditMode: false })),
  on(toggleEditMode, (state): DashboardStateType => ({ ...state, isEditMode: !state.isEditMode })),

  on(
    setOriginalDashboard,
    (state, action): DashboardStateType => ({ ...state, originalData: action.dashboard }),
  ),

  on(
    saveDraft,
    (state): DashboardStateType => ({
      ...state,
      isEditMode: false,
      originalData: state.draftData,
      draftData: null,
    }),
  ),

  on(
    discardChanges,
    (state): DashboardStateType => ({ ...state, isEditMode: false, draftData: null }),
  ),
);
