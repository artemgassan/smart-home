import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import { TuiAppearance } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader, TuiMainComponent } from '@taiga-ui/layout';
import { Card } from '@/features/card/card';

@Component({
  selector: 'app-card-list',
  imports: [TuiRepeatTimes, TuiAppearance, TuiCardLarge, TuiHeader, TuiMainComponent, Card],
  standalone: true,
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardList {}
