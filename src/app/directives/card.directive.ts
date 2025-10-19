import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardDirective]',
})
export class CardDirective {
  @HostBinding('style.outline')
  public outline = 'none';

  @HostListener('mouseenter')
  public addBorder(): void {
    this.outline = '1px solid var(--tui-text-tertiary)';
  }

  @HostListener('mouseleave')
  public removeBorder(): void {
    this.outline = 'none';
  }
}
