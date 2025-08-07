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
    effect(() => {
      this.activeDashboard();
      this.updateDashboardPageUrl();
    });
  }

  public setActiveDashboard(dashboard: string): void {
    this.activeDashboard.set(dashboard);
  }

  private updateDashboardPageUrl(): void {
    this.router.navigate([RoutePath.dashboard, this.activeDashboard()]);
  }
}
