import { TuiIcon } from '@taiga-ui/core';
import { TuiBlock } from '@taiga-ui/kit';
import { NgClass } from '@angular/common';
import { TuiHeader } from '@taiga-ui/layout';
import { EntityIconPipe } from '@/app/pipes/entity-icon.pipe';
import { SensorPipe } from '@/features/sensor/lib/sensor.pipe';
import type { SensorItemType, SensorValueType } from '@/features/sensor';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-sensor',
  imports: [TuiBlock, TuiHeader, TuiIcon, EntityIconPipe, SensorPipe, NgClass],
  templateUrl: './sensor.html',
  styleUrl: './sensor.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sensor {
  public item = input.required<SensorItemType>();
  public size = input.required<string>();

  protected getTitle(): string {
    return this.item().label;
  }

  protected getIcon(): string {
    return this.item().icon;
  }

  protected getValue(): SensorValueType {
    return this.item().value;
  }
}
