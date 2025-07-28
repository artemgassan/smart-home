import { TabsSwitcher } from '@/app/interfaces/tabs.interface';
import { CardList } from '@/app/components/card-list/card-list';
import { TabSwitcher } from '@/app/components/tab-switcher/tab-switcher';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TabToCardsPipe } from '@/app/components/dashboard/pipes/tab-to-cards.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList, TabToCardsPipe],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  public activeTab = signal<TabsSwitcher>(TabsSwitcher.overview);
}
