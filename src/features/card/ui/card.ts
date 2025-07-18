import { Layout } from '@/features/card';
import { TuiTitle } from '@taiga-ui/core';
import type { LayoutType } from '@/features/card';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [TuiTitle],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public title = input<string>('');
  public layout = input<LayoutType>(Layout.SingleDevice);
}
