import { TuiIcon } from '@taiga-ui/core';
import { NgClass } from '@angular/common';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBlock, TuiSwitch } from '@taiga-ui/kit';
import { EntityIconPipe } from '@/app/pipes/entity-icon.pipe';
import { DevicesService } from '@/app/services/devices.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import type { DeviceItemType } from '@/app/interfaces/cards.interface';
import { input, model, inject, computed, Component, ChangeDetectionStrategy } from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Device {
  public item = model.required<DeviceItemType>();
  public state = computed<boolean>(() => this.item().state);
  public size = input.required<string>();
  private readonly api = inject(DevicesService);
  private readonly id = computed<string>(() => this.item().id);

  public toggleDeviceState(state: boolean): void {
    this.item.update((item) => ({ ...item, state }));
    this.api.toggleDeviceState(this.id(), this.state()).subscribe();
  }

  protected getTitle(): string {
    return this.item().label;
  }

  protected getIcon(): string {
    return this.item().icon;
  }
}
