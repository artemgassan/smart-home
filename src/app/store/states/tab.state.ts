import type { TabType } from '@/app/interfaces/tabs.interface';

export type TabStateType = {
  tabs?: TabType[];
  selectedTab?: TabType;
};

export const initialTabState: TabStateType = {
  tabs: undefined,
  selectedTab: undefined,
};
