import { Card } from '@/features/card';
import { TuiAppearance } from '@taiga-ui/core';
import type { CardType, LayoutType } from '@/features/card';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { responseCards } from '../../../../public/data/mock-response';
import { TuiCardLarge, TuiHeader, TuiMainComponent } from '@taiga-ui/layout';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [TuiAppearance, TuiCardLarge, TuiHeader, TuiMainComponent, Card],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardList {
  protected cards: CardType[] = responseCards;

  protected getTitle(card: CardType): string {
    return card.title;
  }

  protected getLayout(card: CardType): LayoutType {
    return card.layout;
  }
}
