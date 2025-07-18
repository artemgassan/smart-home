import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabSwitcher } from '@/features/tab-switcher/tab-switcher';
import { CardList } from '@/widgets/card-list/card-list';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {}
