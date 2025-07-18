import type { CardType } from '@/features/card';
import response from './mock-data.json';
import type { TabType } from '@/widgets/card-list';
import type { DashboardType } from '@/widgets/dashboard';

export const responseData: DashboardType[] = JSON.parse(JSON.stringify(response));
export const responseTabs: TabType[] = JSON.parse(JSON.stringify(response.tabs));
export const responseCards: CardType[] = JSON.parse(JSON.stringify(responseTabs.flatMap((tab) => tab.cards)));
