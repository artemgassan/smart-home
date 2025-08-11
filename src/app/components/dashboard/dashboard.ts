import {
  inject,
  signal,
  effect,
  computed,
  Component,
  ChangeDetectionStrategy,
  linkedSignal,
  input, output,
} from '@angular/core';
import { TuiLoader } from '@taiga-ui/core';
import type { OnInit } from '@angular/core';
import {
  switchMap,
  tap,
  finalize,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  filter,
} from 'rxjs';
import { CardList } from '@/app/components/card-list/card-list';
import { DashboardsService } from '@/app/services/dashboards.service';
import { TabSwitcher } from '@/app/components/tab-switcher/tab-switcher';
import type { DashboardType, TabType } from '@/app/interfaces/tabs.interface';
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
  public initTab = input<TabType | undefined>(undefined);
  public changeTab = output<TabType>();
  protected activeTab = linkedSignal<TabType | undefined>(() => this.initTab());

  protected onChangeTab(tab: TabType): void {
    if (this.activeTab()?.id === tab.id) return;
    this.activeTab.set(tab);
    this.changeTab.emit(tab);
  }

  // protected tabs = linkedSignal<TabType[] | undefined>(() => {
  //   return this.dashboard()?.tabs;
  // });

  // constructor() {
  //   let initialRun = true;
  //   effect(() => {
  //     const tabs = this.dashboard();
  //     if (tabs) this.activeTab.set(tabs.tabs[0]);
  //     if (!initialRun && tabs) {
  //       this.url.setActiveTab(tabs.tabs[0].id);
  //     } else if (tabs) {
  //       initialRun = false;
  //       this.url.setDefaultTab(tabs.tabs[0].id);
  //     }
  //   });
  // }

  // public ngOnInit(): void {
  //   this.router.events
  //     .pipe(
  //       filter((params) => {
  //         // @ts-expect-error
  //         return !!params['dashboardId'];
  //       }),
  //       // @ts-expect-error
  //       switchMap((params) => this.api.getDashboard(params['dashboardId'])))
  //     .subscribe({
  //       next: (data) => {
  //         this.dashboard.set(data);
  //         if (data.tabs?.length) {
  //           this.activeTab.set(data.tabs[0]);
  //         }
  //       },
  //     });
  // }
  //
  // public ngOnInit(): void {
  //   this.route.params
  //     .pipe(
  //       tap(() => this.isLoading.set(true)),
  //       switchMap((params) => {
  //         const dashboardId = params['dashboardId'] || 'overview';
  //         return this.api.getDashboard(dashboardId).pipe(finalize(() => this.isLoading.set(false)));
  //       }),
  //     )
  //     .subscribe({
  //       next: (data) => {
  //         debugger;
  //         this.dashboard.set(data);
  //       },
  //     });
  // }
}

// TODO: distinctUntilChanged()
// or distinctUntilKeyChanged()
