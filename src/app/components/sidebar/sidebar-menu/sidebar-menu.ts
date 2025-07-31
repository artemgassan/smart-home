import type { OnInit } from '@angular/core';
import { RoutePath } from '@/app/app.routes';
import { TuiNavigation } from '@taiga-ui/layout';
import { ActivatedRoute, Router } from '@angular/router';
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
  protected tabs = signal<DashboardResponse[]>([]);
  protected activeTab = signal<string>('');
  private api = inject(DashboardsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.getDashboards();
  }

  protected setActiveTab(tabId: string): void {
    this.activeTab.set(tabId);
    this.router.navigate([RoutePath.dashboard.replace(':dashboardId', tabId)]);
  }

  private getDashboards(): void {
    this.api.getDashboards().subscribe({
      next: (response) => {
        this.activeTab.set(response[0].id);
        this.tabs.set(response);
      },
    });
  }
}
