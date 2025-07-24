import { Layout } from '@/features/card';
import { TuiSwitch } from '@taiga-ui/kit';
import { Device } from '@/features/device';
import { Sensor } from '@/features/sensor';
import { FormsModule } from '@angular/forms';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import type { LayoutType, CardType } from '@/features/card';
import { CardDirective } from '@/features/card/lib/card.directive';
import { ChangeDetectionStrategy, Component, computed, input, viewChildren } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [
    TuiTitle,
    TuiSwitch,
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
    Device,
    Sensor,
    FormsModule,
    CardDirective,
  ],
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public card = input<CardType>();
  public items = computed(() => this.card()?.items);
  public devices = viewChildren(Device);
  public groupState = computed(() => this.devices().some((device) => device.state()));
  protected readonly Layout = Layout;

  public toggleDevices(state: boolean): void {
    this.devices().forEach((device) => device.toggleDeviceState(state));
  }

  protected getTitle(): string {
    return this.card()?.title || '';
  }

  protected getLayout(): LayoutType {
    return this.card()?.layout || Layout.SingleDevice;
  }

  protected showGroupToggle(): boolean {
    const items = this.items() ?? [];
    const minCountDevices = 2;
    const deviceCount = items.filter((item) => item.type === 'device').length;
    return deviceCount >= minCountDevices;
  }
}
