import { createAction } from '@ngrx/store';

export const enterEditMode = createAction('[Dashboard] Enter Edit Mode');
export const exitEditMode = createAction('[Dashboard] Exit Edit Mode');
export const toggleEditMode = createAction('[Dashboard] Toggle Edit Mode');
