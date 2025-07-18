import type { CardType } from '@/features/card';
import response from './mock-data.json';
import type { Tab } from '@/widgets/card-list';
import type { Dashboard } from '@/widgets/dashboard';

export const responseData: Dashboard[] = JSON.parse(JSON.stringify(response));
export const responseTabs: Tab[] = JSON.parse(JSON.stringify(response.tabs));
export const responseCards: CardType[] = JSON.parse(JSON.stringify(responseTabs.flatMap((tab) => tab.cards)));
