import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { linkedSignal, signal } from '@angular/core';
import { Header } from '@/app/components/header/header';
import { Sidebar } from '@/app/components/sidebar/sidebar';
import { Dashboard } from '@/app/components/dashboard/dashboard';
import { DashboardsService } from '@/app/services/dashboards.service';
import type { DashboardResponse } from '@/app/interfaces/tabs.interface';

@Component({
  selector: 'app-dashboard-page',
  imports: [Header, Sidebar, Dashboard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage implements OnInit {
  protected dashboards = signal<DashboardResponse[]>([]);
  protected activeDashboard = linkedSignal<DashboardResponse>(() => this.dashboards()[0]);
  private api = inject(DashboardsService);

  public ngOnInit(): void {
    this.getDashboards();
  }

  private getDashboards(): void {
    this.api.getDashboards().subscribe({
      next: (response) => {
        this.dashboards.set(response);
      },
    });
  }
}
