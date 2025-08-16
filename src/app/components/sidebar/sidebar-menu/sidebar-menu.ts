import {
  input,
  output,
  inject,
  Component,
  linkedSignal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiNavigation } from '@taiga-ui/layout';
import { TuiConfirmService } from '@taiga-ui/kit';
import { TuiDialogService } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { EntityIconPipe } from '@/app/pipes/entity-icon.pipe';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { TuiResponsiveDialogService } from '@taiga-ui/addon-mobile';
import type { DashboardResponse } from '@/app/interfaces/tabs.interface';
import { AddDashboardModal } from '@/app/components/modals/add-dashboard-modal/add-dashboard-modal';

@Component({
  selector: 'app-sidebar-menu',
  imports: [TuiNavigation, EntityIconPipe, TuiInputModule, FormsModule, AddDashboardModal],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TuiConfirmService,
    {
      provide: TuiDialogService,
      useExisting: TuiResponsiveDialogService,
    },
  ],
})
export class SidebarMenu {
  public dashboards = input<DashboardResponse[]>([]);
  public initDashboard = input<string>();
  public changeDashboard = output<string>();
  public addDashboard = output<string>();

  protected activeDashboard = linkedSignal<string | undefined>(() => this.initDashboard());

  private readonly confirm = inject(TuiConfirmService);
  private readonly dialogs = inject(TuiDialogService);

  protected setActiveDashboard(dashboardId: string): void {
    if (dashboardId !== this.activeDashboard()) {
      this.activeDashboard.set(dashboardId);
      this.changeDashboard.emit(dashboardId);
    }
  }

  protected openAddDashboardModal(content: PolymorpheusContent): void {
    const closeable = this.confirm.withConfirm({
      label: 'Are you sure?',
      data: {
        content: 'Your data will be <strong>lost</strong>',
      },
    });

    this.dialogs
      .open(content, { label: 'Add a new dashboard', closeable, dismissible: closeable })
      .subscribe();
  }
}
