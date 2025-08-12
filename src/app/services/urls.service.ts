import { RoutePath } from '@/app/app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import { effect, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private activeTab = signal<string>('');
  private activeDashboard = signal<string>('');

  constructor() {
    let initialRun = true;
    effect(() => {
      this.activeDashboard();
      this.activeTab();
      this.updateDashboardPageUrl();
      if (!initialRun) {
        return;
      }
      initialRun = false;
    });
  }

  public setActiveDashboard(dashboard: string): void {
    this.activeDashboard.set(dashboard);
  }

  public setActiveTab(tab: string): void {
    this.activeTab.set(tab);
  }

  public setDefaultDashboard(defaultDashboard: string): void {
    const routeDashboard = this.route.snapshot.paramMap.get('dashboardId');
    this.activeDashboard.set(routeDashboard ?? defaultDashboard);
  }

  public setDefaultTab(defaultTab: string): void {
    const routeTab = this.route.snapshot.paramMap.get('tabId');
    this.activeTab.set(routeTab ?? defaultTab);
  }

  private updateDashboardPageUrl(): void {
    this.router.navigate([RoutePath.dashboard, this.activeDashboard(), this.activeTab()]);
  }
}
