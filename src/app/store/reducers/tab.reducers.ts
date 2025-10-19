import { createReducer, on } from '@ngrx/store';
import { initialTabState } from '@/app/store/states/tab.state';
import type { TabStateType } from '@/app/store/states/tab.state';
import { addTab, removeTab } from '@/app/store/actions/tab.actions';

export const tabReducers = createReducer(
  initialTabState,

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
