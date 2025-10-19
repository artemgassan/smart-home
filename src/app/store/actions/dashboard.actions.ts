import { createAction, props } from '@ngrx/store';
import type { CardType } from '@/app/interfaces/cards.interface';
import type { DashboardType } from '@/app/interfaces/tabs.interface';

export const enterEditMode = createAction('[Dashboard] Enter Edit Mode');
export const exitEditMode = createAction('[Dashboard] Exit Edit Mode');
export const toggleEditMode = createAction('[Dashboard] Toggle Edit Mode');

export const getDashboard = createAction(
  '[Dashboard] Get Dashboard',
  props<{ dashboardId: string }>(),
);
export const setDashboard = createAction(
  '[Dashboard] Set Dashboard',
  props<{ dashboard: DashboardType; dashboardId: string }>(),
);

export const saveDraft = createAction('[Dashboard] Save Draft');
export const discardChanges = createAction('[Dashboard] Discard Changes');

export const addCard = createAction(
  '[Dashboard] Add Card',
  props<{ tabId: string; card: CardType }>(),
);
