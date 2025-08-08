import type { TabType } from '@/app/interfaces/tabs.interface';

export type TabStateType = {
  tabs?: TabType[];
  selectedTab: TabType | null;
};

export const initialTabState: TabStateType = {
  tabs: [],
  selectedTab: null,
};
