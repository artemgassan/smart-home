import { Layout } from '@/features/card';
import { TuiSwitch } from '@taiga-ui/kit';
import { Device } from '@/features/device';
import { Sensor } from '@/features/sensor';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import type { LayoutType, CardType } from '@/features/card';
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [TuiTitle, TuiSwitch, TuiAppearance, TuiCardLarge, TuiHeader, Device, Sensor, FormsModule],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public card = input<CardType>();
  public toggle = signal<boolean>(false);

  protected readonly Layout = Layout;

  protected getTitle(): string {
    return this.card()?.title || '';
  }

  protected getLayout(): LayoutType {
    return this.card()?.layout || Layout.SingleDevice;
  }
}
