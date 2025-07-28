import { CardList } from '@/widgets/card-list';
import { TabsSwitcher, TabSwitcher } from '@/features/tab-switcher';
import { DashboardService } from '@/widgets/dashboard/api/dashboard.service';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  public activeTab = signal<TabsSwitcher>(TabsSwitcher.overview);
  protected dashboardService = inject(DashboardService);
  protected readonly TabsSwitcher = TabsSwitcher;
}
