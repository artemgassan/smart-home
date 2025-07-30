import { TuiNavigation } from '@taiga-ui/layout';
import { EntityIconPipe } from '@/app/pipes/entity-icon.pipe';
import type { TabsResponse } from '@/app/interfaces/tabs.interface';
import { DashboardsService } from '@/app/services/dashboards.service';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  imports: [TuiNavigation, EntityIconPipe],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenu {
  protected tabs = signal<TabsResponse[]>([]);
  private api = inject(DashboardsService);

  constructor() {
    this.api.getTabs().subscribe({
      next: (response) => {
        this.tabs.set(response);
      },
    });
  }
}
