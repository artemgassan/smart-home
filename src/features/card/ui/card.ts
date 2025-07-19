import { Layout } from '@/features/card';
import { TuiSwitch } from '@taiga-ui/kit';
import { Device } from '@/features/device';
import { Sensor } from '@/features/sensor';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import type { LayoutType, CardType } from '@/features/card';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [TuiTitle, TuiSwitch, TuiAppearance, TuiCardLarge, TuiHeader, Device, Sensor],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public card = input<CardType>();

  protected readonly Layout = Layout;

  protected getTitle(): string {
    return this.card()?.title || '';
  }

  protected getLayout(): LayoutType {
    return this.card()?.layout || Layout.SingleDevice;
  }
}
