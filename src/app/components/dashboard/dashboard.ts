import { switchMap } from 'rxjs';
import type { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardList } from '@/app/components/card-list/card-list';
import { DashboardsService } from '@/app/services/dashboards.service';
import { TabSwitcher } from '@/app/components/tab-switcher/tab-switcher';
import type { DashboardType, TabType } from '@/app/interfaces/tabs.interface';
import {
  inject,
  signal,
  effect,
  computed,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard implements OnInit {
  protected dashboard = signal<DashboardType | null>(null);
  protected tabs = computed<TabType[] | undefined>(() => this.dashboard()?.tabs);
  protected activeTab = signal<TabType | undefined>(undefined);
  private readonly api = inject(DashboardsService);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    effect(() => {
      const tabs = this.tabs();
      if (tabs) this.activeTab.set(tabs[0]);
    });
  }

  public ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const dashboardId = params['dashboardId'];
          return this.api.getDashboard(dashboardId);
        }),
      )
      .subscribe({
        next: (data) => this.dashboard.set(data),
      });
  }
}
