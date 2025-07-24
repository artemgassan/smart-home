import { TuiRoot } from '@taiga-ui/core';
import { DashboardPage } from '@/pages/dashboard-page';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, DashboardPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
