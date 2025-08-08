import { createAction, props } from '@ngrx/store';

export enum TabActions {
  EnterEditMode = '[Tab] Enter Edit Mode',
  ExitEditMode = '[Tab] Exit Edit Mode',
  AddTab = '[Tab] Add Tab',
  RemoveTab = '[Tab] Remove Tab',
}

export const enterEditMode = createAction(TabActions.EnterEditMode);
export const exitEditMode = createAction(TabActions.ExitEditMode);
export const addTab = createAction(TabActions.AddTab, props<{ title: string }>());
export const removeTab = createAction(TabActions.RemoveTab, props<{ tabId: string }>());
