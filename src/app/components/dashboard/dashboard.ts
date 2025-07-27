import {CardType} from '@/app/components/card/card.model';
import { CardList } from '@/app/components/card-list/card-list';
import {TabType} from '@/app/components/card-list/card-list.model';
import {responseData} from '../../../../public/data/mock-response';
import { TabSwitcher } from '@/app/components/tab-switcher/tab-switcher';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TabsSwitcher } from '@/app/components/tab-switcher/tab-switcher.model';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  public activeTab = signal<TabsSwitcher>(TabsSwitcher.overview);
  protected readonly TabsSwitcher = TabsSwitcher;

  protected responseTabs: TabType[] = responseData.tabs;

  protected getOverviewCards(): CardType[] {
    const overviewTab = this.responseTabs.find((tab) => tab.id === 'overview');
    return overviewTab ? overviewTab.cards : [];
  }

  protected getLightsCards(): CardType[] {
    const lightsTab = this.responseTabs.find((tab) => tab.id === 'lights');
    return lightsTab ? lightsTab.cards : [];
  }
}
