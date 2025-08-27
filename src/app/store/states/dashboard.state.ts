import type { DashboardType } from '@/app/interfaces/tabs.interface';

export type DashboardStateType = {
  isEditMode: boolean;
  dashboardId: string;
  originalData: DashboardType | null;
  draftData: DashboardType | null;
};

export const initialDashboardState: DashboardStateType = {
  isEditMode: false,
  dashboardId: 'temp',
  originalData: null,
  draftData: null,
};
