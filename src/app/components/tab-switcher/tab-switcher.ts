import {
  TuiTab,
  TuiFade,
  TUI_CONFIRM,
  TuiTabsHorizontal,
  type TuiConfirmData,
} from '@taiga-ui/kit';
import { Store } from '@ngrx/store';
import { filter, switchMap, tap } from 'rxjs';
import type { TuiDialogContext } from '@taiga-ui/core';
import { UrlsService } from '@/app/services/urls.service';
import { type TabType } from '@/app/interfaces/tabs.interface';
import { type PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { TuiResponsiveDialogService } from '@taiga-ui/addon-mobile';
import { DashboardsService } from '@/app/services/dashboards.service';
import { TuiHeader, TuiSubheaderCompactComponent } from '@taiga-ui/layout';
import { selectEditMode } from '@/app/store/selectors/dashboard.selectors';
import { selectRouteDashboardId } from '@/app/store/selectors/router.selectors';
import { TuiAlertService, TuiButton, TuiDialogService, TuiTitle } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';

@Component({
  selector: 'app-tab-switcher',
  imports: [
    TuiFade,
    TuiTab,
    TuiTabsHorizontal,
    TuiButton,
    TuiHeader,
    TuiTitle,
    TuiSubheaderCompactComponent,
  ],
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcher {
  public tabs = input<TabType[]>();
  public activeTab = input<TabType | null>();
  public tabChanged = output<TabType>();

  protected readonly store = inject(Store);
  protected readonly editMode = this.store.selectSignal(selectEditMode);
  protected activeIndex = computed(() => this.getActiveItemIndex());

  private readonly confirm = inject(TuiResponsiveDialogService);
  private readonly dialogs = inject(TuiDialogService);
  private readonly alerts = inject(TuiAlertService);
  private readonly api = inject(DashboardsService);
  private readonly url = inject(UrlsService);

  protected onTabClick(tab: TabType): void {
    this.tabChanged.emit(tab);
  }

  protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs.open(content).subscribe();
  }

  protected onDeleteDashboard(): void {
    const data: TuiConfirmData = {
      content: 'Unfortunately, you cannot cancel this action.',
      yes: 'Delete',
      no: 'Cancel',
    };

    this.confirm
      .open<boolean>(TUI_CONFIRM, {
        label: 'Do you really want to delete your dashboard?',
        size: 's',
        data,
      })
      .pipe(
        filter((response) => response),
        switchMap(() => {
          const currentDashboard = this.store.selectSignal(selectRouteDashboardId);
          this.url.clearCurrentUrl();
          return this.api.removeDashboard(currentDashboard());
        }),
        tap(() => this.alerts.open('Dashboard deleted successfully').subscribe()),
      )
      .subscribe();
  }

  private getActiveItemIndex(): number {
    const tabs = this.tabs() ?? [];
    const activeTab = this.activeTab();

    if (!activeTab || tabs.length === 0) {
      return 0;
    }

    const index = tabs.findIndex((tab) => tab.id === activeTab.id);
    return index >= 0 ? index : 0;
  }
}
