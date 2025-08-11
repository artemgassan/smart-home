import {
  inject,
  signal,
  effect,
  computed,
  Component,
  ChangeDetectionStrategy,
  linkedSignal,
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
import { ActivatedRoute, Router } from '@angular/router';
import { UrlsService } from '@/app/services/urls.service';
import { CardList } from '@/app/components/card-list/card-list';
import { DashboardsService } from '@/app/services/dashboards.service';
import { TabSwitcher } from '@/app/components/tab-switcher/tab-switcher';
import type { DashboardType, TabType } from '@/app/interfaces/tabs.interface';
import { DashboardNotFound } from '@/app/components/dashboard/dashboard-not-found/dashboard-not-found';
import { RoutePath } from '@/app/app.routes';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList, DashboardNotFound, TuiLoader],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard implements OnInit {
  protected dashboard = signal<DashboardType | null>(null);
  // protected tabs = linkedSignal<TabType[] | undefined>(() => {
  //   return this.dashboard()?.tabs;
  // });
  protected activeTab = signal<TabType | undefined>(undefined);
  protected isLoading = signal<boolean>(true);
  private readonly api = inject(DashboardsService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly url = inject(UrlsService);

  constructor() {
    let initialRun = true;
    effect(() => {
      const tabs = this.dashboard();
      if (tabs) this.activeTab.set(tabs.tabs[0]);
      if (!initialRun && tabs) {
        this.url.setActiveTab(tabs.tabs[0].id);
      } else if (tabs) {
        initialRun = false;
        this.url.setDefaultTab(tabs.tabs[0].id);
      }
    });
  }

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

  public ngOnInit(): void {
    this.route.params
      .pipe(
        tap(() => this.isLoading.set(true)),
        switchMap((params) => {
          const dashboardId = params['dashboardId'] || 'overview';
          return this.api.getDashboard(dashboardId).pipe(finalize(() => this.isLoading.set(false)));
        }),
      )
      .subscribe({
        next: (data) => {
          debugger;
          this.dashboard.set(data);
        },
      });
  }
}

// TODO: distinctUntilChanged()
// or distinctUntilKeyChanged()
