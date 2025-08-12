import { TuiNavigation } from '@taiga-ui/layout';
import { EntityIconPipe } from '@/app/pipes/entity-icon.pipe';
import type { DashboardResponse } from '@/app/interfaces/tabs.interface';
import { ChangeDetectionStrategy, Component, input, linkedSignal, output } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  imports: [TuiNavigation, EntityIconPipe],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenu {
  public dashboards = input<DashboardResponse[]>([]);
  public initDashboard = input<string>();
  public changeDashboard = output<string>();
  protected activeDashboard = linkedSignal<string | undefined>(() => this.initDashboard());

  protected setActiveDashboard(dashboardId: string): void {
    if (dashboardId !== this.activeDashboard()) {
      this.activeDashboard.set(dashboardId);
      this.changeDashboard.emit(dashboardId);
    }
  }
}
