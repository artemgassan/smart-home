import { type TabType } from '@/app/interfaces/tabs.interface';
import { TuiSubheaderCompactComponent } from '@taiga-ui/layout';
import { TuiFade, TuiTab, TuiTabsHorizontal } from '@taiga-ui/kit';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-tab-switcher',
  imports: [TuiFade, TuiSubheaderCompactComponent, TuiTab, TuiTabsHorizontal],
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcher {
  public tabs = input<TabType[] | undefined>();
  public activeTab = input<TabType | null>();
  public tabChanged = output<TabType>();

  protected activeIndex = computed(() => {
    const tabs = this.tabs() ?? [];
    const activeTab = this.activeTab();

    if (!activeTab || tabs.length === 0) {
      return 0;
    }

    const index = tabs.findIndex((tab) => tab.id === activeTab.id);
    return index >= 0 ? index : 0;
  });

  protected onTabClick(tab: TabType): void {
    this.tabChanged.emit(tab);
  }
}
