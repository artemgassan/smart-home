import { TuiIcon } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBlock, TuiSwitch } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import type { DeviceItemType } from '@/features/device';
import { EntityIconPipe } from '@/shared/lib/pipes/entity-icon.pipe';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-device',
  imports: [TuiBlock, TuiSwitch, TuiIcon, ReactiveFormsModule, TuiHeader, EntityIconPipe],
  templateUrl: './device.html',
  styleUrl: './device.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Device {
  public item = input<DeviceItemType>();
  public square = input<boolean>(false);

  protected getTitle(): string {
    return this.item()?.label || '';
  }

  protected getIcon(): string {
    return this.item()?.icon || '';
  }
}
