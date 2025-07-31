import { Router } from '@angular/router';
import type { OnInit } from '@angular/core';
import { RoutePath } from '@/app/app.routes';
import { TuiNavigation } from '@taiga-ui/layout';
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
  private api = inject(DashboardsService);
  private router = inject(Router);

  public ngOnInit(): void {
    this.getDashboards();
  }

  protected setActiveDashboard(tabId: string): void {
    this.activeDashboard.set(tabId);
    this.router.navigate([RoutePath.dashboard, tabId]);
  }

  private getDashboards(): void {
    this.api.getDashboards().subscribe({
      next: (response) => {
        this.activeDashboard.set(response[0].id);
        this.dashboards.set(response);
      },
    });
  }
}
