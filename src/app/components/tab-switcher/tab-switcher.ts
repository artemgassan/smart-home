import {
  TuiTab,
  TuiFade,
  TUI_CONFIRM,
  TuiTabsHorizontal,
  type TuiConfirmData,
} from '@taiga-ui/kit';
import { filter, switchMap } from 'rxjs';
import { TuiAlertService, TuiButton } from '@taiga-ui/core';
import { type TabType } from '@/app/interfaces/tabs.interface';
import { TuiSubheaderCompactComponent } from '@taiga-ui/layout';
import { TuiResponsiveDialogService } from '@taiga-ui/addon-mobile';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';

@Component({
  selector: 'app-tab-switcher',
  imports: [TuiFade, TuiSubheaderCompactComponent, TuiTab, TuiTabsHorizontal, TuiButton],
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcher {
  public tabs = input<TabType[]>();
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

  private readonly dialogs = inject(TuiResponsiveDialogService);
  private readonly alerts = inject(TuiAlertService);

  protected onTabClick(tab: TabType): void {
    this.tabChanged.emit(tab);
  }

  protected onDeleteDashboard(): void {
    const data: TuiConfirmData = {
      content: 'Unfortunately, you cannot cancel this action.',
      yes: 'Delete',
      no: 'Cancel',
    };

    this.dialogs
      .open<boolean>(TUI_CONFIRM, {
        label: 'Do you really want to delete your dashboard?',
        size: 's',
        data,
      })
      .pipe(
        filter((response) => response === true),
        switchMap(() => this.alerts.open('Dashboard deleted successfully')),
      )
      .subscribe();
  }
}
