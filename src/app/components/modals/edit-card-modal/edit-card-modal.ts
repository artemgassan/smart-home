import { Store } from '@ngrx/store';
import { TuiBlock } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiIcon, TuiTitle } from '@taiga-ui/core';
import type { TuiDialogContext } from '@taiga-ui/core';
import { EntityIconPipe } from '@/app/pipes/entity-icon.pipe';
import { POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';
import { SensorPipe } from '@/app/components/sensor/pipes/sensor.pipe';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { selectCardEntities } from '@/app/store/selectors/dashboard.selectors';

@Component({
  selector: 'app-edit-card-modal',
  imports: [TuiHeader, TuiTitle, TuiButton, EntityIconPipe, SensorPipe, TuiBlock, TuiIcon],
  templateUrl: './edit-card-modal.html',
  styleUrl: './edit-card-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCardModal {
  protected readonly store = inject(Store);
  protected readonly entities = this.store.selectSignal(selectCardEntities);
  private readonly context = inject<TuiDialogContext>(POLYMORPHEUS_CONTEXT);

  protected onCanselClick(): void {
    this.context.completeWith();
  }

  protected onSaveClick(): void {
    this.context.completeWith();
  }
}
