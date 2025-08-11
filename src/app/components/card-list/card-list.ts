import { Card } from '@/app/components/card/card';
import { TuiHeader, TuiMainComponent } from '@taiga-ui/layout';
import type { TabType } from '@/app/interfaces/tabs.interface';
import type { CardType } from '@/app/interfaces/cards.interface';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  imports: [TuiHeader, TuiMainComponent, Card],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardList {
  public tab = input<TabType | undefined>();
  protected cards = computed<CardType[]>(() => this.tab()?.cards || []);
}
