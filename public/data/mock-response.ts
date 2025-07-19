import response from './mock-data.json';
import type { CardType } from '@/features/card';
import type { TabType } from '@/widgets/card-list';
import type { DashboardType } from '@/widgets/dashboard';

export const responseDashboard: DashboardType = JSON.parse(JSON.stringify(response));
export const responseTabs: TabType[] = responseDashboard.tabs;
export const responseCards: CardType[] = responseTabs.flatMap((tab) => tab.cards);
