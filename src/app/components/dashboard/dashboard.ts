import { TabsSwitcher } from '@/app/interfaces/tabs.interface';
import { CardList } from '@/app/components/card-list/card-list';
import type { DashboardType } from '@/app/interfaces/tabs.interface';
import { DashboardsService } from '@/app/services/dashboards.service';
import { TabSwitcher } from '@/app/components/tab-switcher/tab-switcher';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TabToCardsPipe } from '@/app/components/dashboard/pipes/tab-to-cards.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList, TabToCardsPipe],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  public dashboard = signal<DashboardType | null>(null);
  public activeTab = signal<TabsSwitcher>(TabsSwitcher.overview);
  private api = inject(DashboardsService);

  constructor() {
    this.api.getDashboard().subscribe({
      next: (data) => this.dashboard.set(data),
    });
  }
}
