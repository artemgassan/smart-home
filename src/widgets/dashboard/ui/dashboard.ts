import { CardList } from '@/widgets/card-list';
import type { CardType } from '@/features/card';
import type { TabType } from '@/widgets/card-list';
import type { TabSwitcherType } from '@/features/tab-switcher';
import { TabsSwitcher, TabSwitcher } from '@/features/tab-switcher';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { responseCards, responseTabs } from '../../../../public/data/mock-response';

@Component({
  selector: 'app-dashboard',
  imports: [TabSwitcher, CardList],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  public responseTabs: TabType[] = responseTabs;
  public allCards: CardType[] = responseCards;
  public activeTab = signal<TabSwitcherType>(TabsSwitcher.overview);
}
