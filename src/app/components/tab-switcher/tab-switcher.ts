import { type TabType } from '@/app/interfaces/tabs.interface';
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
  public tabs = input<TabType[] | undefined>();
  public activeTab = input<TabType | undefined>();
  public tabChanged = output<TabType>();

  protected onTabClick(tab: TabType): void {
    this.tabChanged.emit(tab);
  }
}
