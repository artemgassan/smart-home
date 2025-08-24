import type { DashboardType } from '@/app/interfaces/tabs.interface';

export type DashboardStateType = {
  isEditMode: boolean;
  originalData: DashboardType | null;
  draftData: DashboardType | null;
};

export const initialDashboardState: DashboardStateType = {
  isEditMode: false,
  originalData: null,
  draftData: null,
};
