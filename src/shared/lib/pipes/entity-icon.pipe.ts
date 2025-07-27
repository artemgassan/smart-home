import { Pipe } from '@angular/core';
import type { PipeTransform } from '@angular/core';
import { DefaultIcons, iconsConfig } from '@/shared/config/iconsConfig';

type EntityIconType = 'device' | 'sensor' | null;

@Pipe({
  name: 'deviceIconPipe',
  standalone: true,
})
export class EntityIconPipe implements PipeTransform {
  public transform(value: string, type: EntityIconType): string {
    const defaultIcon = this.getDefaultIcon(type);
    return this.editingIconLabel(iconsConfig[value] || defaultIcon);
  }

  private getDefaultIcon(type: EntityIconType): string {
    switch (type) {
      case 'device':
        return DefaultIcons.device;
      case 'sensor':
        return DefaultIcons.sensor;
      default:
        return DefaultIcons.other;
    }
  }

  private editingIconLabel(name: string): string {
    return `@tui.${name}`;
  }
}
