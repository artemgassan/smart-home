import { CardList } from '@/app/components/card-list/card-list';
import { DashboardService } from '@/app/services/dashboard.service';
import { TabSwitcher } from '@/app/components/tab-switcher/tab-switcher';
import { TabsSwitcher } from '@/app/components/tab-switcher/tab-switcher.model';
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
