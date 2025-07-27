import { TuiButton } from '@taiga-ui/core';
import { AuthService } from '@/app/services/auth.service';
import { TuiSubheaderCompactComponent } from '@taiga-ui/layout';
import { TuiFade, TuiTab, TuiTabsHorizontal } from '@taiga-ui/kit';
import { TabsSwitcher } from '@/app/components/tab-switcher/tab-switcher.model';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';

@Component({
  selector: 'app-tab-switcher',
  imports: [TuiFade, TuiSubheaderCompactComponent, TuiTab, TuiTabsHorizontal, TuiButton],
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcher {
  public activeTab = input.required<TabsSwitcher>();
  public tabChanged = output<TabsSwitcher>();
  protected readonly tabs = Object.values(TabsSwitcher);

  protected api = inject(AuthService);

  protected onTabClick(tab: TabsSwitcher): void {
    this.tabChanged.emit(tab);
  }
}
