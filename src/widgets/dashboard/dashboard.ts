import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiNavigation } from '@taiga-ui/layout';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-dashboard',
  imports: [TuiNavigation, TuiButton],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {}
