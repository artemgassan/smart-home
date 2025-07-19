import { TuiIcon } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { TuiBlock, TuiSwitch } from '@taiga-ui/kit';
import type { SensorItemType } from '@/features/sensor';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-sensor',
  imports: [TuiBlock, TuiHeader, TuiIcon, TuiSwitch],
  templateUrl: './sensor.html',
  styleUrl: './sensor.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sensor {
  public item = input<SensorItemType>();
  public square = input<boolean>(false);

  protected getTitle(): string {
    return this.item()?.label || '';
  }
}
