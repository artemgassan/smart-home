import { Store } from '@ngrx/store';
import { TuiIcon } from '@taiga-ui/core';
import { NgClass } from '@angular/common';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBlock, TuiSwitch } from '@taiga-ui/kit';
import { EntityIconPipe } from '@/app/pipes/entity-icon.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import type { DeviceItemType } from '@/app/interfaces/cards.interface';
import { ChangeDetectionStrategy, Component, computed, inject, input, model } from '@angular/core';

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
  public state = computed(() => this.item().state);
  public size = input.required<string>();
  private store = inject(Store);

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
