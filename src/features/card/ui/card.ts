import { TuiTitle } from '@taiga-ui/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [TuiTitle],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {}
