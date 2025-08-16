import { Component, inject } from '@angular/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { FormsModule } from '@angular/forms';
import { TuiConfirmService } from '@taiga-ui/kit';

@Component({
  selector: 'app-add-dashboard-modal',
  imports: [TuiInputModule, FormsModule],
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
