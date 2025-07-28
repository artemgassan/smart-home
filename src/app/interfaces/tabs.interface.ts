import type { CardType } from '@/app/interfaces/cards.interface';

export type DashboardType = {
  tabs: TabType[];
};

export type TabType = {
  id: string;
  title: string;
  cards: CardType[];
};

export enum TabsSwitcher {
  overview = 'Overview',
  lights = 'Lights',
}

export type TabSwitcherType = TabsSwitcher;
