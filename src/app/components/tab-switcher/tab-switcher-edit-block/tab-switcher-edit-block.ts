import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AddTabModal } from '@/app/components/modals/add-tab-modal/add-tab-modal';
import { TuiButton, type TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { AddCardModal } from '@/app/components/modals/add-card-modal/add-card-modal';

@Component({
  selector: 'app-tab-switcher-edit-block',
  imports: [TuiButton, AddCardModal, AddTabModal],
  templateUrl: './tab-switcher-edit-block.html',
  styleUrl: './tab-switcher-edit-block.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabSwitcherEditBlock {
  private readonly dialogs = inject(TuiDialogService);

  protected onAbbCard(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs.open(content).subscribe();
  }

  protected onTabCard(content: PolymorpheusContent<TuiDialogContext>): void {
    this.dialogs.open(content).subscribe();
  }
}
