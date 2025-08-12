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
  protected changeTab = output<TabType>();
  protected isLoading = signal<boolean>(true);
  protected activeTab = linkedSignal<TabType | undefined>(() => undefined);
  protected activeTabId = linkedSignal<string>(() => {
    const paramFromUrl = this.route.snapshot.paramMap.get('tabId');
    if (paramFromUrl) return paramFromUrl;
    return this.activeTab()?.id ?? '';
  });
  private api = inject(DashboardsService);
  private route = inject(ActivatedRoute);
  private url = inject(UrlsService);

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
    this.url.setDefaultTab(this.activeTabId());
  }

  protected onMenuChangeDashboard(dashboardId: string): void {
    this.activeDashboardId.set(dashboardId);
    this.url.setActiveDashboard(dashboardId);
  }

  protected onChangeTab(tab: TabType): void {
    this.activeTab.set(tab);
    this.activeTabId.set(tab.id);
    this.url.setActiveTab(tab.id);
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

          const defaultTab =
            response.tabs.find((tab) => tab.id === this.activeTabId()) ?? response.tabs[0];

          this.activeTab.set(defaultTab);

          if (defaultTab) {
            this.activeTabId.set(defaultTab.id);
            this.url.setActiveTab(defaultTab.id);
          }
        },
      });
  }
}
