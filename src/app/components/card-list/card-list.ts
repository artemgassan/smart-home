import { Card } from '@/app/components/card/card';
import { TuiHeader, TuiMainComponent } from '@taiga-ui/layout';
import type { CardType } from '@/app/interfaces/cards.interface';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [TuiHeader, TuiMainComponent, Card],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardList {
  public cards = input.required<CardType[]>();
}
