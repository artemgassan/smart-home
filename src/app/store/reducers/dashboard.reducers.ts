import {
  addCard,
  saveDraft,
  exitEditMode,
  setDashboard,
  enterEditMode,
  toggleEditMode,
  discardChanges,
} from '@/app/store/actions/dashboard.actions';
import { createReducer, on } from '@ngrx/store';
import { initialDashboardState } from '@/app/store/states/dashboard.state';
import type { DashboardStateType } from '@/app/store/states/dashboard.state';

export const dashboardReducers = createReducer(
  initialDashboardState,

  on(
    enterEditMode,
    (state): DashboardStateType => ({ ...state, isEditMode: true, draftData: state.originalData }),
  ),
  on(exitEditMode, (state): DashboardStateType => ({ ...state, isEditMode: false })),
  on(toggleEditMode, (state): DashboardStateType => ({ ...state, isEditMode: !state.isEditMode })),

  on(
    setDashboard,
    (state, action): DashboardStateType => ({
      ...state,
      originalData: action.dashboard,
      dashboardId: action.dashboardId,
      draftData: null,
    }),
  ),

  on(
    saveDraft,
    (state): DashboardStateType => ({
      ...state,
      isEditMode: false,
      originalData: state.draftData,
    }),
  ),
  on(
    discardChanges,
    (state): DashboardStateType => ({ ...state, isEditMode: false, draftData: null }),
  ),

  on(addCard, (state, action): DashboardStateType => {
    if (!state.draftData) {
      return state;
    }

    const updatedDraftData = {
      ...state.draftData,
      tabs: state.draftData.tabs.map((tab) => {
        if (tab.id === action.tabId) {
          return {
            ...tab,
            cards: [...tab.cards, action.card],
          };
        }
        return tab;
      }),
    };

    return {
      ...state,
      draftData: updatedDraftData,
    };
  }),
);
