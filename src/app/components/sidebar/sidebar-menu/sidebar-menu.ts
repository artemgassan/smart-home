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
  protected activeDashboard = linkedSignal<string | undefined>(() => {
    return this.initDashboard();
  });

  protected setActiveDashboard(dashboardId: string): void {
    if (dashboardId !== this.activeDashboard()) {
      this.activeDashboard.set(dashboardId);
      this.changeDashboard.emit(dashboardId);
    }
    // this.activeDashboard.set(dashboardsId);
    // this.router.navigate([RoutePath.dashboard, dashboardsId]);

    // this.url.setActiveDashboard(dashboardsId);
  }

  // private getDashboards(): void {
  //   this.api.getDashboards().subscribe({
  //     next: (response) => {
  //       // this.setDefaultDashboard(response[0].id);
  //       this.dashboards.set(response);
  //
  //       // this.url.setDefaultDashboard(response[0].id);
  //     },
  //   });
  // }

  // private setDefaultDashboard(responseId: string): void {
  //   const routeId = this.route.snapshot.paramMap.get('dashboardId') ?? '';
  //   if (routeId) {
  //     this.activeDashboard.set(routeId);
  //     this.router.navigate([RoutePath.dashboard, routeId]);
  //   } else {
  //     this.activeDashboard.set(responseId);
  //     this.router.navigate([RoutePath.dashboard, responseId]);
  //   }
  // }
}
