import { Injectable } from '@angular/core';
import type { CardType } from '@/app/components/card/card.model';
import { responseData } from '../../../public/data/mock-response';
import type { TabType } from '@/app/components/card-list/card-list.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public responseTabs: TabType[] = responseData.tabs;

  public getOverviewCards(): CardType[] {
    const overviewTab = this.responseTabs.find((tab) => tab.id === 'overview');
    return overviewTab ? overviewTab.cards : [];
  }

  public getLightsCards(): CardType[] {
    const lightsTab = this.responseTabs.find((tab) => tab.id === 'lights');
    return lightsTab ? lightsTab.cards : [];
  }
}
