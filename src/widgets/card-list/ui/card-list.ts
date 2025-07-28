import { Card } from '@/features/card';
import type { CardType } from '@/features/card';
import { TuiHeader, TuiMainComponent } from '@taiga-ui/layout';
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
