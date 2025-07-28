import { TabsSwitcher } from '@/features/tab-switcher';
import { TuiSubheaderCompactComponent } from '@taiga-ui/layout';
import { TuiFade, TuiTab, TuiTabsHorizontal } from '@taiga-ui/kit';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tab-switcher',
  imports: [TuiFade, TuiSubheaderCompactComponent, TuiTab, TuiTabsHorizontal],
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcher {
  public activeTab = input.required<TabsSwitcher>();
  public tabChanged = output<TabsSwitcher>();
  protected readonly tabs = Object.values(TabsSwitcher);

  protected onTabClick(tab: TabsSwitcher): void {
    this.tabChanged.emit(tab);
  }
}
