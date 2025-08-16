import { FormsModule } from '@angular/forms';
import { TuiConfirmService } from '@taiga-ui/kit';
import { Component, inject } from '@angular/core';
import { TuiButton, TuiTextfield } from '@taiga-ui/core';

@Component({
  selector: 'app-add-dashboard-modal',
  imports: [FormsModule, TuiTextfield, TuiButton],
  templateUrl: './add-dashboard-modal.html',
  styleUrl: './add-dashboard-modal.scss',
})
export class AddDashboardModal {
  protected value = '';

  private readonly confirm = inject(TuiConfirmService);

  protected onModelChange(value: string): void {
    this.value = value;
    this.confirm.markAsDirty();
  }
}
