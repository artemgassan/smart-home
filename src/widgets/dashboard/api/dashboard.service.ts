import { Injectable } from '@angular/core';
import type { CardType } from '@/features/card';
import type { TabType } from '@/widgets/card-list';
import { responseData } from '../../../../public/data/mock-response';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public responseTabs: TabType[] = responseData.tabs;

  public getAllCards(): CardType[] {
    return this.responseTabs.flatMap((tab) => tab.cards);
  }
}
