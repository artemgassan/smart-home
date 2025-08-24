import { createAction, props } from '@ngrx/store';

export enum TabActions {
  AddTab = '[Tab] Add Tab',
  RemoveTab = '[Tab] Remove Tab',
}

export const addTab = createAction(TabActions.AddTab, props<{ title: string }>());
export const removeTab = createAction(TabActions.RemoveTab, props<{ tabId: string }>());
