import type { DashboardType } from '@/app/interfaces/tabs.interface';

export type DashboardStateType = {
  isEditMode: boolean;
  dashboardId: string;
  viewData: DashboardType | null;
  originalData: DashboardType | null;
};

export const initialDashboardState: DashboardStateType = {
  isEditMode: false,
  dashboardId: '',
  viewData: null,
  originalData: null,
};
