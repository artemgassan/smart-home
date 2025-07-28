import { TuiIcon } from '@taiga-ui/core';
import { NgClass } from '@angular/common';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBlock, TuiSwitch } from '@taiga-ui/kit';
import type { DeviceItemType } from '@/features/device';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityIconPipe } from '@/shared/lib/pipes/entity-icon.pipe';
import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'app-device',
  imports: [
    TuiBlock,
    TuiSwitch,
    TuiIcon,
    ReactiveFormsModule,
    TuiHeader,
    EntityIconPipe,
    FormsModule,
    NgClass,
  ],
  templateUrl: './device.html',
  styleUrl: './device.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Device {
  public item = model.required<DeviceItemType>();
  public state = computed(() => this.item().state);
  public size = input.required<string>();

  public toggleDeviceState(state: boolean): void {
    this.item.update((item) => ({ ...item, state }));
  }

  protected getTitle(): string {
    return this.item().label;
  }

  protected getIcon(): string {
    return this.item().icon;
  }
}
