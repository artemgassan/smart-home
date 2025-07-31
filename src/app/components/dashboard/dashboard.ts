import { switchMap } from 'rxjs';
import type { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabsSwitcher } from '@/app/interfaces/tabs.interface';
import { CardList } from '@/app/components/card-list/card-list';
import { DashboardsService } from '@/app/services/dashboards.service';
import { TabSwitcher } from '@/app/components/tab-switcher/tab-switcher';
import type { DashboardType, TabType } from '@/app/interfaces/tabs.interface';
import { TabToCardsPipe } from '@/app/components/dashboard/pipes/tab-to-cards.pipe';
import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList, TabToCardsPipe],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard implements OnInit {
  public dashboard = signal<DashboardType | null>(null);
  public activeTab = signal<TabsSwitcher>(TabsSwitcher.overview);
  private tabs = computed<TabType[] | undefined>(() => this.dashboard()?.tabs);
  private readonly api = inject(DashboardsService);
  private readonly route = inject(ActivatedRoute);

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
