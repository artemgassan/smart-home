import { createAction, props } from '@ngrx/store';
import type { DashboardType } from '@/app/interfaces/tabs.interface';

export const enterEditMode = createAction('[Dashboard] Enter Edit Mode');
export const exitEditMode = createAction('[Dashboard] Exit Edit Mode');
export const toggleEditMode = createAction('[Dashboard] Toggle Edit Mode');

export const setOriginalDashboard = createAction(
  '[Dashboard] Set Original Dashboard',
  props<{ dashboard: DashboardType }>(),
);

export const saveDraft = createAction('[Dashboard] Save Draft');
export const saveDraftSuccess = createAction(
  '[Dashboard] Save Draft Success',
  props<{ dashboard: DashboardType }>,
);
export const saveDraftFailure = createAction('[Dashboard] Save Draft Failure');
export const discardChanges = createAction('[Dashboard] Discard Changes');

export const setDashboardId = createAction(
  '[Dashboard] Set Dashboard ID',
  props<{ dashboardId: string }>(),
);
