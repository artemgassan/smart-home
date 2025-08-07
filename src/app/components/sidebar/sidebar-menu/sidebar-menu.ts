import type { OnInit } from '@angular/core';
import { RoutePath } from '@/app/app.routes';
import { TuiNavigation } from '@taiga-ui/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlsService } from '@/app/services/urls.service';
import { EntityIconPipe } from '@/app/pipes/entity-icon.pipe';
import { DashboardsService } from '@/app/services/dashboards.service';
import type { DashboardResponse } from '@/app/interfaces/tabs.interface';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  imports: [TuiNavigation, EntityIconPipe],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenu implements OnInit {
  protected dashboards = signal<DashboardResponse[]>([]);
  protected activeDashboard = signal<string>('');
  private readonly router = inject(Router);
  private readonly url = inject(UrlsService);
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(DashboardsService);

  public ngOnInit(): void {
    this.getDashboards();
  }

  protected setActiveDashboard(dashboardsId: string): void {
    this.activeDashboard.set(dashboardsId);
    this.router.navigate([RoutePath.dashboard, dashboardsId]);
  }

  private getDashboards(): void {
    this.api.getDashboards().subscribe({
      next: (response) => {
        this.setDefaultDashboard(response[0].id);
        this.dashboards.set(response);
      },
    });
  }

  private setDefaultDashboard(responseId: string): void {
    const routeId = this.route.snapshot.paramMap.get('dashboardId') ?? '';
    if (routeId) {
      this.activeDashboard.set(routeId);
      this.router.navigate([RoutePath.dashboard, routeId]);
    } else {
      this.activeDashboard.set(responseId);
      this.router.navigate([RoutePath.dashboard, responseId]);
    }
  }
}
