import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';

const expectedIcons: Record<string, string> = {
  thermostat: 'thermometer',
  water_drop: 'droplets',
  cloud: 'cloud',
  co2: 'bubbles',
  motion_photos_on: 'activity',
  lightbulb: 'lightbulb',
  power: 'power',
};

enum DefaultIcons {
  device = 'lamp',
  sensor = 'airplay',
  other = 'cpu',
}

type EntityIconType = 'device' | 'sensor' | null;

@Pipe({
  name: 'deviceIconPipe',
  standalone: true,
})
export class EntityIconPipe implements PipeTransform {
  public transform(value: string, type: EntityIconType): string {
    const defaultIcon = this.getDefaultIcon(type);
    return this.editingIconLabel(expectedIcons[value] || defaultIcon);
  }

  private getDefaultIcon(type: EntityIconType): string {
    if (type === 'device') return DefaultIcons.device;
    if (type === 'sensor') return DefaultIcons.sensor;
    else return DefaultIcons.other;
  }

  private editingIconLabel(name: string): string {
    return `@tui.${name}`;
  }
}
