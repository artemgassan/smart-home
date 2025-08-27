import { TuiCard, TuiHeader } from '@taiga-ui/layout';
import { Layout } from '@/app/interfaces/cards.interface';
import { POLYMORPHEUS_CONTEXT } from '@taiga-ui/polymorpheus';
import type { LayoutType } from '@/app/interfaces/cards.interface';
import { DashboardsService } from '@/app/services/dashboards.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiAppearance, type TuiDialogContext, TuiIcon, TuiTitle } from '@taiga-ui/core';

@Component({
  selector: 'app-add-card-modal',
  imports: [TuiCard, TuiAppearance, TuiTitle, TuiHeader, TuiIcon],
  templateUrl: './add-card-modal.html',
  styleUrl: './add-card-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCardModal {
  protected readonly Layout = Layout;
  private readonly service = inject(DashboardsService);
  private readonly context = inject<TuiDialogContext>(POLYMORPHEUS_CONTEXT);

  protected onClick(layout: LayoutType): void {
    this.service.addCard(layout);
    this.context.completeWith();
  }
}
