import { TuiBlockStatusComponent } from '@taiga-ui/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-not-found',
  imports: [TuiBlockStatusComponent],
  standalone: true,
  templateUrl: './dashboard-not-found.html',
  styleUrl: './dashboard-not-found.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardNotFound {}
