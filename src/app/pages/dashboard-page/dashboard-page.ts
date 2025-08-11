import { finalize } from 'rxjs';
import type { OnInit } from '@angular/core';
import { effect, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { linkedSignal, signal } from '@angular/core';
import { Header } from '@/app/components/header/header';
import { UrlsService } from '@/app/services/urls.service';
import { Sidebar } from '@/app/components/sidebar/sidebar';
import { Dashboard } from '@/app/components/dashboard/dashboard';
import { DashboardsService } from '@/app/services/dashboards.service';
import type { DashboardResponse, DashboardType, TabType } from '@/app/interfaces/tabs.interface';

@Component({
  selector: 'app-dashboard-page',
  imports: [Header, Sidebar, Dashboard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage implements OnInit {
  protected dashboards = signal<DashboardResponse[]>([]);
  protected activeDashboardId = linkedSignal<string>(() => {
    const paramFromUrl = this.route.snapshot.paramMap.get('dashboardId');
    if (paramFromUrl) return paramFromUrl;
    return this.dashboards()[0]?.id ?? '';
  });
  protected activeDashboard = linkedSignal<DashboardType | null>(() => null);
  protected changeDashboard = output<string>();
  protected isLoading = signal<boolean>(true);
  protected activeTab = linkedSignal<TabType | undefined>(() => undefined);
  private url = inject(UrlsService);
  private route = inject(ActivatedRoute);
  private api = inject(DashboardsService);

  constructor() {
    effect(() => {
      const dashboardId = this.activeDashboardId();
      if (dashboardId) {
        this.getDashboard();
      }
    });
  }

  public ngOnInit(): void {
    this.getDashboards();
  }

  protected onMenuChangeDashboard(dashboardId: string): void {
    this.activeDashboardId.set(dashboardId);
    this.url.setActiveDashboard(dashboardId);
  }

  private getDashboards(): void {
    this.api.getDashboards().subscribe({
      next: (response) => {
        this.dashboards.set(response);
        this.url.setDefaultDashboard(this.activeDashboardId());
      },
    });
  }

  private getDashboard(): void {
    this.api
      .getDashboard(this.activeDashboardId())
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (response) => {
          this.activeDashboard.set(response);
          this.activeTab.set(response.tabs[0]);
        },
      });
  }
}
