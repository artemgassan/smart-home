import { TuiHeader } from '@taiga-ui/layout';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-dashboard-modal',
  imports: [TuiButton, TuiHeader, TuiTitle],
  templateUrl: './edit-dashboard-modal.html',
  styleUrl: './edit-dashboard-modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDashboardModal {}
