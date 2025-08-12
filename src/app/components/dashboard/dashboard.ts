import { TuiLoader } from '@taiga-ui/core';
import { CardList } from '@/app/components/card-list/card-list';
import { TabSwitcher } from '@/app/components/tab-switcher/tab-switcher';
import type { DashboardType, TabType } from '@/app/interfaces/tabs.interface';
import { Component, ChangeDetectionStrategy, linkedSignal, input, output } from '@angular/core';
import { DashboardNotFound } from '@/app/components/dashboard/dashboard-not-found/dashboard-not-found';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList, DashboardNotFound, TuiLoader],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  public dashboard = input<DashboardType | null>(null);
  public isLoading = input.required<boolean>();
  public initTab = input<TabType | null>(null);
  public changeTab = output<TabType>();
  protected activeTab = linkedSignal<TabType | null>(() => this.initTab());

  protected onChangeTab(tab: TabType): void {
    if (this.activeTab()?.id === tab.id) return;
    this.activeTab.set(tab);
    this.changeTab.emit(tab);
  }
}
