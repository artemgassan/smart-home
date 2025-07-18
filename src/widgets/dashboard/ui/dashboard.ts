import { CardList } from '@/widgets/card-list';
import { TabSwitcher } from '@/features/tab-switcher';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {}
