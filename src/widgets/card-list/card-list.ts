import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader, TuiMainComponent } from '@taiga-ui/layout';

@Component({
  selector: 'app-card-list',
  imports: [TuiRepeatTimes, TuiAppearance, TuiCardLarge, TuiHeader, TuiTitle, TuiMainComponent],
  standalone: true,
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardList {}
