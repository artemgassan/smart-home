import { routerReducer } from '@ngrx/router-store';
import type { Action, ActionReducerMap } from '@ngrx/store';
import { tabReducers } from '@/app/store/reducers/tab.reducers';
import type { AppStateType } from '@/app/store/states/app.state';

export const appReducers: ActionReducerMap<AppStateType, Action> = {
  router: routerReducer,
  tabs: tabReducers,
};
