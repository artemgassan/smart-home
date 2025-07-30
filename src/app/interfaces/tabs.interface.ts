import type { CardType } from '@/app/interfaces/cards.interface';

export type DashboardType = {
  tabs: TabType[];
};

export type DashboardResponse = {
  id: string;
  title: string;
  icon: string;
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
