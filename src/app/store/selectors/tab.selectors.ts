import { createSelector } from '@ngrx/store';
import type { AppStateType } from '@/app/store/states/app.state';
import type { TabStateType } from '@/app/store/states/tab.state';

const selectUsers = (state: AppStateType): TabStateType => state.tabs;

export const selectTabsState = createSelector(selectUsers, (state: TabStateType) => state.tabs);

export const selectSelectedTab = createSelector(
  selectUsers,
  (state: TabStateType) => state.selectedTab,
);
