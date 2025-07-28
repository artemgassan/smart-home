import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';
import type { SensorValueType } from '@/app/interfaces/cards.interface';

@Pipe({
  name: 'sensorPipe',
  standalone: true,
})
export class SensorPipe implements PipeTransform {
  public transform(value: SensorValueType): string {
    if (value.amount === 1) {
      return `${value.unit}`;
    }

    return `${value.amount} ${value.unit}`;
  }
}
