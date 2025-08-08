import { createReducer, on } from '@ngrx/store';
import { initialTabState } from '@/app/store/states/tab.state';
import type { TabStateType } from '@/app/store/states/tab.state';
import { addTab, enterEditMode, exitEditMode, removeTab } from '@/app/store/actions/tab.actions';

export const tabReducers = createReducer(
  initialTabState,

  on(
    enterEditMode,
    (state): TabStateType => ({
      ...state,
    }),
  ),

  on(
    exitEditMode,
    (state): TabStateType => ({
      ...state,
    }),
  ),

  on(
    addTab,
    (state): TabStateType => ({
      ...state,
    }),
  ),

  on(
    removeTab,
    (state): TabStateType => ({
      ...state,
    }),
  ),
);
