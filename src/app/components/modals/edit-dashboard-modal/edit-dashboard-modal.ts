import { Store } from '@ngrx/store';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import type { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';
import { exitEditMode } from '@/app/store/actions/dashboard.actions';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-edit-dashboard-modal',
  imports: [TuiButton, TuiHeader, TuiTitle],
  templateUrl: './edit-dashboard-modal.html',
  styleUrl: './edit-dashboard-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDashboardModal {
  private readonly store = inject(Store);
  private readonly context = inject<TuiDialogContext<boolean>>(POLYMORPHEUS_CONTEXT);

  protected onSave(): void {
    this.store.dispatch(exitEditMode());
    this.context.completeWith(true);
  }

  protected onDiscard(): void {
    this.store.dispatch(exitEditMode());
    this.context.completeWith(false);
  }
}
