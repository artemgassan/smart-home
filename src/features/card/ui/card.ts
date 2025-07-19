import { Layout } from '@/features/card';
import { TuiSwitch } from '@taiga-ui/kit';
import type { LayoutType } from '@/features/card';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [TuiTitle, TuiSwitch, TuiAppearance, TuiCardLarge, TuiHeader],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public title = input<string>('');
  public layout = input<LayoutType>(Layout.SingleDevice);
  protected readonly Layout = Layout;
}
