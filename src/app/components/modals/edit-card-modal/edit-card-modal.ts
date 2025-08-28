import { TuiTitle } from '@taiga-ui/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import type { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-edit-card-modal',
  imports: [TuiHeader, TuiTitle, TuiButton],
  templateUrl: './edit-card-modal.html',
  styleUrl: './edit-card-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCardModal {
  private readonly context = inject<TuiDialogContext>(POLYMORPHEUS_CONTEXT);

  protected onClick(): void {
    this.context.completeWith();
  }
}
