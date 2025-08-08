import type { RouterReducerState } from '@ngrx/router-store';
import { initialTabState } from '@/app/store/states/tab.state';
import type { TabStateType } from '@/app/store/states/tab.state';

export type AppStateType = {
  router?: RouterReducerState;
  tabs: TabStateType;
};

export const initialAppState: AppStateType = {
  tabs: initialTabState,
};

export function getInitialState(): AppStateType {
  return initialAppState;
}
