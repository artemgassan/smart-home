import { TuiSwitch } from '@taiga-ui/kit';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Device } from '@/app/components/device/device';
import { Sensor } from '@/app/components/sensor/sensor';
import { TuiAppearance, TuiTitle } from '@taiga-ui/core';
import { Layout } from '@/app/interfaces/cards.interface';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import type { CardType, LayoutType } from '@/app/interfaces/cards.interface';
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
    NgClass,
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public card = input.required<CardType>();
  public items = computed(() => this.card().items);
  public devices = viewChildren(Device);
  public groupState = computed(() => this.devices().some((device) => device.state()));

  public toggleDevices(state: boolean): void {
    this.devices().forEach((device) => device.toggleDeviceState(state));
  }

  protected getTitle(): string {
    return this.card().title;
  }

  protected getLayout(): LayoutType {
    return this.card().layout;
  }

  protected getLayoutStyleClass(): string {
    const layout = this.getLayout();
    if (layout === Layout.MultiHorizontalDevice) return 'horizontal-layout';
    if (layout === Layout.MultiVerticalDevice) return 'vertical-layout';
    else return 'single-device';
  }

  protected showGroupToggle(): boolean {
    const items = this.items();
    const minCountDevices = 2;
    const deviceCount = items.filter((item) => item.type === 'device').length;
    return deviceCount >= minCountDevices;
  }
}
